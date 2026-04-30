import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login — Live Cake",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 text-brand-yellow text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
            Live Cake · Admin
          </div>
          <h1 className="font-display text-4xl uppercase tracking-tight text-white">
            Bienvenido{" "}
            <span className="bg-gradient-to-r from-[#00d64f] via-[#00d64f] to-[#00d64f] bg-clip-text text-transparent">
              de vuelta.
            </span>
          </h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
