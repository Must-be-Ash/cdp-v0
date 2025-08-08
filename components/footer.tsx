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
        Campaign organized by Ash • Contact for questions{" "}
        <br />
        All funds will go directly toward skydiving experience and related costs.
      </TextShimmer>
    </footer>
  );
}
