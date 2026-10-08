import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#080808] px-6 py-12 text-white sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs">
                AG
              </span>

              <span className="text-sm font-medium">
                Instituto Acesso Global
              </span>
            </div>

            <p className="mt-5 max-w-[420px] text-sm leading-6 text-white/40">
              Conhecimento, discernimento e propósito para uma jornada de
              aprendizado mais profunda.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/evanio_vale/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/@profetaevaniovale"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://www.facebook.com/profeta.evanio.vale"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaFacebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.tiktok.com/@profetaevaniovale?_r=1&_t=ZS-9AO7Scxn3TE"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#b18a4a] hover:bg-[#b18a4a] hover:text-white"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            <a
              href="#inicio"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Início
            </a>

            <a
              href="#instituto"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              O Instituto
            </a>

            <a
              href="#modulos"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Conteúdos
            </a>

            <a
              href="#planos"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Planos
            </a>

            <a
              href="#evanio"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Evanio Vale
            </a>

            <a
              href="#faq"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              FAQ
            </a>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Instituto Acesso Global
          </span>

          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}