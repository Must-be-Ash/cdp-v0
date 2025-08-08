import { generateJwt } from '@coinbase/cdp-sdk/auth'

/**
 * Generate a JSON Web Token (JWT) for CDP API authentication
 * Required for all CDP Onramp API calls
 */
export async function generateJWT(): Promise<string> {
  const privateKeyString =
    process.env.CDP_API_KEY_PRIVATE_KEY || process.env.CDP_SECRET_KEY
  const keyName =
    process.env.CDP_API_KEY_NAME || process.env.CDP_SECRET_KEY_NAME

  if (!privateKeyString || !keyName) {
    throw new Error(
      'CDP_API_KEY_PRIVATE_KEY and CDP_API_KEY_NAME must be set'
    )
  }

  try {
    // 🚨 USE CDP SDK - handles all key formats automatically
    const jwt = await generateJwt({
      apiKeyId: keyName,
      apiKeySecret: privateKeyString, // Works with PEM, base64, or any format
      requestMethod: 'POST',
      requestHost: 'api.developer.coinbase.com',
      requestPath: '/onramp/v1/token',
      expiresIn: 120, // 2 minutes
    })
    return jwt
  } catch (error) {
    console.error('JWT generation failed:', error)
    console.error(
      'Key format detected:',
      privateKeyString.startsWith('-----BEGIN') ? 'PEM' : 'Base64'
    )
    throw new Error(
      'Failed to generate JWT. Please check your CDP API key format.'
    )
  }
}

/**
 * Create a session token for initializing the onramp widget
 * This token is single-use and expires after 5 minutes
 */
export async function createSessionToken(
  jwt: string,
  params: {
    addresses: Array<{
      address: string
      blockchains: string[]
    }>
    assets?: string[]
  }
): Promise<string> {
  const response = await fetch(
    'https://api.developer.coinbase.com/onramp/v1/token',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Failed to create session token: ${error}`)
  }

  const data = await response.json()
  return data.token || data.data?.token
}

/**
 * Generate a complete onramp URL with session token
 * Use this for programmatic onramp URL generation
 */
export async function generateOnrampUrl(params: {
  addresses: Array<{
    address: string
    blockchains: string[]
  }>
  assets?: string[]
  defaultAsset?: string
  defaultNetwork?: string
  presetFiatAmount?: number
  presetCryptoAmount?: number
  redirectUrl?: string
  partnerUserId?: string
}): Promise<string> {
  // Generate JWT and session token
  const jwt = await generateJWT()
  const sessionToken = await createSessionToken(jwt, {
    addresses: params.addresses,
    assets: params.assets,
  })

  // Build URL with session token and optional parameters
  const url = new URL('https://pay.coinbase.com/buy/select-asset')
  url.searchParams.set('sessionToken', sessionToken)

  if (params.defaultAsset) {
    url.searchParams.set('defaultAsset', params.defaultAsset)
  }
  if (params.defaultNetwork) {
    url.searchParams.set('defaultNetwork', params.defaultNetwork)
  }
  if (params.presetFiatAmount) {
    url.searchParams.set(
      'presetFiatAmount',
      params.presetFiatAmount.toString()
    )
  }
  if (params.presetCryptoAmount) {
    url.searchParams.set(
      'presetCryptoAmount',
      params.presetCryptoAmount.toString()
    )
  }
  if (params.redirectUrl) {
    url.searchParams.set('redirectUrl', params.redirectUrl)
  }
  if (params.partnerUserId) {
    url.searchParams.set('partnerUserId', params.partnerUserId)
  }

  return url.toString()
}
