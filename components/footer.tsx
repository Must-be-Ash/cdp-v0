import { TextShimmer } from '@/components/ui/text-shimmer';

export function Footer() {
  return (
    <footer className="text-center py-8">
      <TextShimmer
        as="p"
        className="text-sm" // Removed text-slate-400 here as TextShimmer handles base color
        duration={2}
        spread={2}
      >
        Built with{" "}
        <a
          href="https://v0.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold" // Make it bold
        >
          v0
        </a>{" "}
        and{" "}
        <a
          href="https://docs.cdp.coinbase.com/embedded-wallets/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold" // Make it bold
        >
          Coinbase Developer Platform
        </a>
        .
      </TextShimmer>
    </footer>
  );
}
