import { Brain, Rocket, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Brain,
    title: "Maturidade, não hype",
    description: "Entender o sistema e saber por que ele funciona para não confundir uma boa demonstração com resultado",
    color: "text-primary"
  },
  {
    icon: Rocket,
    title: "Conhecimento transferível",
    description: "Os princípios valem para Codex, Claude Code, Cursor, Antigravity, OpenCode, Hermes e as próximas ferramentas",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Repertório + execução ao vivo",
    description: "Cada encontro combina teoria, prática ao vivo e uma construção que evolui durante a maratona",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Economia com critério",
    description: "Decida modelos, planos, orçamento e uso de tokens sem desperdiçar dinheiro ou perder governança",
    color: "text-secondary"
  }
];

export const Benefits = () => {
  return (
    <section id="por-que-participar" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
            O salto não está em pedir melhor.<br />
            <span className="glow-cyan text-primary">Está em construir o ambiente certo</span>{" "}
            para a inteligência trabalhar.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${benefit.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
