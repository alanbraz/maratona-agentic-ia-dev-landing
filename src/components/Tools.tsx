import { Braces, Code2, Command, Cpu, Terminal } from "lucide-react";

const tools = [
  { name: "Codex", provider: "OpenAI", icon: Code2 },
  { name: "Claude Code", provider: "Anthropic", icon: Braces },
  { name: "Cursor", provider: "Anysphere", icon: Command },
  { name: "Antigravity", provider: "Google", icon: Cpu },
  { name: "OpenCode", provider: "Open source", icon: Terminal },
  { name: "Hermes", provider: "Nous Research", icon: Terminal },
];

export const Tools = () => {
  return (
    <section className="border-y border-border/60 bg-card/20 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Ferramentas reais</p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Ferramentas mudam. <span className="text-primary">O conhecimento precisa continuar válido.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            O que ensinamos pode ser usado no Codex, Claude Code, Cursor, Antigravity, OpenCode, Hermes e afins. Você escolhe a ferramenta com que se sente mais à vontade.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="rounded-xl border border-border/60 bg-card/60 p-5 text-center transition-colors hover:border-primary/60">
                <Icon className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
                <p className="mt-3 font-semibold text-foreground">{tool.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{tool.provider}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-sm text-muted-foreground">
          Você não precisa instalar tudo. Vai entender as categorias, o que existe por baixo de cada uma e como escolher a melhor opção para seu contexto.
        </p>
      </div>
    </section>
  );
};
