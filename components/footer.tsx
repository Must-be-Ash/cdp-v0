import { TextShimmer } from '@/components/ui/text-shimmer';

export function Footer() {
  return (
    <footer className="text-center py-8">
      <TextShimmer
        as="p"
        className="text-sm"
        duration={2}
        spread={2}
      >
        Powered by coffee and community ☕ Built with{" "}
        <a
          href="https://v0.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          v0
        </a>{" "}
        and{" "}
        <a
          href="https://docs.cdp.coinbase.com/embedded-wallets/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Coinbase Developer Platform
        </a>
        .
      </TextShimmer>
    </footer>
  );
}
