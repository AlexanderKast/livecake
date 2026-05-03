export function BlogCTAInline() {
  return (
    <aside className="my-10 rounded-2xl border border-brand-green/30 bg-brand-green/5 p-6 sm:p-8 not-prose">
      <p className="text-xs font-sans font-semibold tracking-widest text-brand-green uppercase mb-2">
        ¿Te está siendo útil?
      </p>
      <h3 className="font-display text-xl sm:text-2xl text-brand-black mb-2">
        ¿Querés ver esto funcionando en tu negocio?
      </h3>
      <p className="font-sans text-neutral-600 text-sm leading-relaxed mb-5">
        En 20 minutos analizamos tu negocio y te mostramos exactamente cómo implementar live shopping sobre Pancake.
        Sin costo, sin compromiso.
      </p>
      <a
        href="/diagnostico"
        className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-sans font-semibold text-sm px-5 py-3 rounded-lg transition-colors duration-150"
      >
        Agendar diagnóstico gratuito de 20 min →
      </a>
    </aside>
  )
}
