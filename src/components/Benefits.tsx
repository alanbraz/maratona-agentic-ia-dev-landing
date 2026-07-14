import { Brain, Rocket, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Brain,
    title: "Fundamentos que Ficam",
    description: "Do histórico e cronologia da IA até a arquitetura de agentes, sem gap de conhecimento",
    color: "text-primary"
  },
  {
    icon: Rocket,
    title: "Direto pro Código",
    description: "Construa agentes, harness e orquestração multi-agente com exemplos reais, não só slides",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Turma ao vivo, não gravação",
    description: "4 aulas ao vivo, interação direta com os instrutores e turma com vagas limitadas",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Nível Produção",
    description: "Segurança, custo, computer use e observability para levar direto para o seu time",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glow-blue text-secondary">Por que escolher?</span>
            </h2>
          </a>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para dominar Agentes de IA de forma técnica, prática e aplicável
          </p>
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
