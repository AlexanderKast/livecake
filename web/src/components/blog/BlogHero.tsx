interface BlogHeroProps {
  titulo?: string
  subtitulo?: string
}

export function BlogHero({
  titulo = "Blog LiveCake",
  subtitulo = "Todo lo que necesitás saber sobre live shopping, falsos lives, ecommerce y el mercado LATAM — en un solo lugar.",
}: BlogHeroProps) {
  return (
    <section className="bg-brand-cream border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-sans font-semibold tracking-widest text-brand-green uppercase mb-4">
            Blog
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-black leading-tight mb-4">
            {titulo}
          </h1>
          <p className="font-sans text-lg sm:text-xl text-neutral-600 leading-relaxed">
            {subtitulo}
          </p>
        </div>
      </div>
    </section>
  )
}
