export function Footer() {
  return (
    <footer className="text-center py-8">
      <p className="text-sm text-slate-400">
        Built with{" "}
        <a
          href="https://v0.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-300 hover:text-white"
        >
          v0.dev
        </a>{" "}
        and{" "}
        <a
          href="https://docs.cdp.coinbase.com/embedded-wallets/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-300 hover:text-white"
        >
          Coinbase Embedded Wallets
        </a>
        .
      </p>
    </footer>
  );
}
