"use client";

import { CDPHooksProvider } from "@coinbase/cdp-hooks";
import { type Config } from '@coinbase/cdp-core';

// IMPORTANT: Replace with your Project ID from https://portal.cdp.coinbase.com
const cdpConfig: Config = {
  projectId: process.env.NEXT_PUBLIC_CDP_PROJECT_ID!,
  basePath: "https://api.cdp.coinbase.com/platform",
  useMock: false,
  // Debugging is enabled in development for easier troubleshooting
  debugging: process.env.NODE_ENV === 'development',
};

export function CDPProvider({ children }: { children: React.ReactNode }) {
  if (!cdpConfig.projectId) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-red-100 text-red-800">
        <div className="max-w-md p-4 text-center">
          <h1 className="text-xl font-bold">Configuration Error</h1>
          <p className="mt-2">
            `NEXT_PUBLIC_CDP_PROJECT_ID` is not set. Please add it to your environment variables.
            You can get your Project ID from the{' '}
            <a href="https://portal.cdp.coinbase.com" target="_blank" rel="noopener noreferrer" className="underline">
              CDP Portal
            </a>.
          </p>
        </div>
      </div>
    );
  }

  // Use CDPHooksProvider for a hooks-based implementation
  return (
    <CDPHooksProvider config={cdpConfig}>
      {children}
    </CDPHooksProvider>
  );
}
