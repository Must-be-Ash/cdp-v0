import { TextShimmer } from '@/components/ui/text-shimmer';

export function Footer() {
  return (
    <footer className="text-center py-8">
      <TextShimmer
        as="p"
        className="text-sm text-white/80 drop-shadow"
        duration={2}
        spread={2}
      >
        Powered by coffee and community ☕ Built with{" "}
        <a
          href="https://v0.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-amber-200 transition-colors"
        >
          v0
        </a>{" "}
        and{" "}
        <a
          href="https://docs.cdp.coinbase.com/embedded-wallets/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-amber-200 transition-colors"
        >
          Coinbase Developer Platform
        </a>
        .
      </TextShimmer>
    </footer>
  );
}
