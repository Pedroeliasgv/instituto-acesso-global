import { ArrowRight, Check, X } from "lucide-react";

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
}

export function PricingModal({ open, onClose }: PricingModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#080808]/75 p-4 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-modal-title"
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#f1eee7] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8 md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        {/* FECHAR */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#080808] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#24211e]"
        >
          <X size={17} />
        </button>

        {/* CABEÇALHO */}
        <div className="pr-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b18a4a]/25 bg-[#b18a4a]/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b18a4a]" />
            <span className="font-display text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#8a6938]">
              Instituto Acesso Global
            </span>
          </div>

          <h2
            id="pricing-modal-title"
            className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.8rem)] font-bold uppercase leading-[0.84] tracking-[-0.065em] text-[#080808]"
          >
            Escolha seu
            <span className="block bg-gradient-to-r from-[#8a6938] via-[#b18a4a] to-[#6d5130] bg-clip-text text-transparent">
              acesso.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#625e58] md:text-base">
            Tenha acesso ao Instituto Acesso Global e aos seus 8 módulos de
            conteúdo.
          </p>
        </div>

        {/* PLANOS */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* PLANO ANUAL */}
          <article className="relative overflow-hidden rounded-[1.5rem] border border-[#b18a4a]/25 bg-gradient-to-br from-white via-[#fffdf8] to-[#eee2cd] p-6 shadow-[0_15px_45px_rgba(139,105,56,0.10)] md:p-7">
            {/* detalhe decorativo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#b18a4a]/10 blur-3xl"
            />

            <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-[#8a6938] to-[#b18a4a] px-3 py-1.5 font-display text-[0.55rem] font-bold uppercase tracking-[0.14em] text-white shadow-md">
              Mais vantajoso
            </span>

            <p className="relative font-display text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#8a6938]">
              Acesso anual
            </p>

            <div className="relative mt-7">
              <span className="text-sm text-[#918b82] line-through">
                R$ 1.497,00
              </span>

              <div className="mt-1 flex flex-wrap items-end gap-2">
                <span className="font-display text-5xl font-bold tracking-[-0.06em] text-[#080808] md:text-6xl">
                  R$ 897
                </span>

                <span className="mb-2 text-sm text-[#625e58]">/ ano</span>
              </div>

              <p className="mt-2 text-sm font-medium text-[#8a6938]">
                ou 12x de R$ 94,97
              </p>
            </div>

            <div className="relative mt-7 border-t border-[#8a6938]/15 pt-6">
              <div className="space-y-3">
                <Benefit text="Acesso integral por 1 ano" />
                <Benefit text="8 módulos do Instituto Acesso Global" />
                <Benefit text="Estudo no seu próprio ritmo" />
              </div>
            </div>

            <a
              href="https://pay.hotmart.com/M107931141B?bid=1791397163725"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-7 flex w-full items-center justify-between rounded-full bg-[#080808] px-5 py-4 font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#201d19] hover:shadow-xl"
            >
              <span>Comprar acesso anual</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b18a4a] text-white">
                <ArrowRight size={15} />
              </span>
            </a>
          </article>

          {/* PLANO MENSAL */}
          <article className="relative overflow-hidden rounded-[1.5rem] border border-[#8d6cff]/25 bg-[#080808] p-6 text-white shadow-[0_15px_45px_rgba(60,35,120,0.18)] md:p-7">
            {/* brilho roxo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7957d5]/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-56 w-56 rounded-full bg-[#4b367f]/20 blur-3xl"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9b7cf0]/25 bg-[#9b7cf0]/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9b7cf0]" />
                <p className="font-display text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#bba7ff]">
                  Assinatura mensal
                </p>
              </div>

              <div className="mt-7">
                <span className="text-sm text-white/35 line-through">
                  R$ 147,00
                </span>

                <div className="mt-1 flex flex-wrap items-end gap-2">
                  <span className="font-display text-5xl font-bold tracking-[-0.06em] md:text-6xl">
                    R$ 97
                  </span>

                  <span className="mb-2 text-sm text-white/40">/ mês</span>
                </div>

                <p className="mt-2 text-sm font-medium text-[#bba7ff]">
                  assinatura recorrente
                </p>
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="space-y-3">
                  <Benefit
                    text="Acesso enquanto a assinatura estiver ativa"
                    dark
                  />

                  <Benefit
                    text="8 módulos do Instituto Acesso Global"
                    dark
                  />

                  <Benefit
                    text="Cobrança recorrente mensal"
                    dark
                  />
                </div>
              </div>

              <a
                href="https://pay.hotmart.com/M107931141B?off=iaddcka9&checkoutMode=6&bid=1791397625677"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-7 flex w-full items-center justify-between rounded-full bg-white px-5 py-4 font-display text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#080808] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#eeeaff] hover:shadow-xl"
              >
                <span>Assinar mensal</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7957d5] text-white">
                  <ArrowRight size={15} />
                </span>
              </a>
            </div>
          </article>
        </div>

        {/* RODAPÉ */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center">
          <span className="h-1 w-1 rounded-full bg-[#b18a4a]" />

          <p className="text-[0.65rem] leading-relaxed text-[#77736c]">
            Ao escolher um plano, você será direcionado para a página oficial
            de pagamento.
          </p>

          <span className="h-1 w-1 rounded-full bg-[#7957d5]" />
        </div>
      </div>
    </div>
  );
}

function Benefit({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          dark
            ? "bg-[#7957d5]/20 text-[#bba7ff]"
            : "bg-[#b18a4a]/15 text-[#8a6938]"
        }`}
      >
        <Check size={12} strokeWidth={2.5} />
      </span>

      <span
        className={`text-sm leading-relaxed ${
          dark ? "text-white/65" : "text-[#494641]"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

