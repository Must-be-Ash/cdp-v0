import { generateJWT } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { addresses, assets } = await request.json();

    // Generate JWT for authentication
    const jwt = await generateJWT();

    // Call CDP Session Token API
    const response = await fetch(
      'https://api.developer.coinbase.com/onramp/v1/token',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          addresses,
          assets: assets || ['ETH', 'USDC', 'BTC'],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Session token API failed:', response.status, errorText);
      throw new Error(`Session token API failed: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({
      token: data.data?.token || data.token,
      channelId: data.data?.channel_id || data.channelId,
    });
  } catch (error) {
    console.error('Session token generation failed:', error);
    return NextResponse.json(
      { error: 'Failed to generate session token' },
      { status: 500 }
    );
  }
}
