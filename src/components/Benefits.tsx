import { Brain, Rocket, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Brain,
    title: "Contexto, não hype",
    description: "Entender as ondas anteriores evita tratar cada ferramenta nova como uma revolução isolada",
    color: "text-primary"
  },
  {
    icon: Rocket,
    title: "Ambiente é capacidade",
    description: "A inteligência disponível depende do sistema ao redor do modelo: memória, ferramentas e feedback",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Repertório + execução ao vivo",
    description: "Cada encontro combina teoria, prática ao vivo e uma missão para aplicar durante a semana",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Autonomia observável",
    description: "O destino não é ausência de supervisão: é autonomia com limites, controle e responsabilidade",
    color: "text-secondary"
  }
];

export const Benefits = () => {
  return (
    <section id="por-que-participar" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <a
            href="#por-que-participar"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
              O salto não está em pedir melhor.<br />
              <span className="glow-cyan text-primary">Está em construir o ambiente certo</span>{" "}
              para a inteligência trabalhar.
            </h2>
          </a>
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
