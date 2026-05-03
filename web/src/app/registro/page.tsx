import { createMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { RegistrationForm } from "@/components/auth/RegistrationForm";

export const metadata = createMetadata({
  title: "Registro",
  description:
    "Únete a la comunidad UGC Colombia. Registro gratuito para marcas y creadores.",
  path: "/registro",
  noIndex: true,
});

export default function RegistroPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(22,163,74,0.08) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(22,163,74,0.05) 0%, transparent 60%)",
          }}
        />
        <section className="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="hidden lg:block animate-fade-in">
              <span className="inline-block px-3 py-1 text-xs font-sans font-semibold tracking-widest uppercase text-brand-green border border-brand-green/40 rounded-full mb-6">
                Registro gratuito
              </span>
              <h2 className="font-display text-5xl xl:text-6xl text-neutral-900 tracking-wide uppercase leading-[1.05] mb-6">
                Únete a <span className="text-brand-green">UGC Colombia</span>
              </h2>
              <p className="text-neutral-500 font-sans text-lg leading-relaxed mb-8 max-w-md">
                La comunidad UGC más grande de Colombia. Conecta con marcas,
                crea contenido y crece como profesional.
              </p>
              <ul className="space-y-4 text-neutral-500 font-sans">
                {[
                  "Acceso a la plataforma KREOON",
                  "Comunidad activa de creadores y marcas",
                  "Pagos seguros y briefs verificados",
                  "100% gratis para empezar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <RegistrationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
