export function BlogCTAFinal() {
  return (
    <section className="mt-16 border-t border-neutral-200 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <span className="inline-block text-xs font-sans font-semibold tracking-widest text-brand-green uppercase mb-4">
          Siguiente paso
        </span>
        <h2 className="font-display text-3xl sm:text-4xl text-brand-black mb-4">
          ¿Listo para montar tu live?
        </h2>
        <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl mx-auto">
          En 20 minutos te mostramos el sistema funcionando en tu categoría. Sin presentaciones genéricas
          —solo el diagnóstico de tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/diagnostico"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-sans font-semibold px-8 py-4 rounded-xl transition-colors duration-150 text-base"
          >
            Agendar diagnóstico gratuito →
          </a>
          <a
            href="/precios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-neutral-300 hover:border-brand-green text-neutral-700 hover:text-brand-green font-sans font-semibold px-8 py-4 rounded-xl transition-colors duration-150 text-base"
          >
            Ver planes →
          </a>
        </div>
      </div>
    </section>
  )
}
