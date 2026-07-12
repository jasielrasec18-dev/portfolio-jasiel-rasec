function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent px-4 pb-10 pt-8 text-zinc-400 sm:px-6 sm:pb-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="h-px w-full bg-white/10" />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="m-0 text-sm">
            Desenvolvido com <span className="text-neonMagenta">♥</span> e muito{" "}
            <span className="text-neonCyan">código</span>
          </p>
          <p className="m-0 text-sm">
            © {year} Jasiel Rasec. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
