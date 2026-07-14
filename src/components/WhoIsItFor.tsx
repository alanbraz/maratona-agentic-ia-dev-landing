import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, TrendingUp, Users2 } from "lucide-react";

const audience = [
  {
    icon: Briefcase,
    title: "Desenvolvedores backend e fullstack",
    description: "Que querem sair do 'prompt engineering' e construir agentes de verdade",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Tech Leads e Engineering Managers",
    description: "Que precisam decidir arquitetura e liderar a adoção de agentes nos times",
    color: "text-secondary"
  },
  {
    icon: GraduationCap,
    title: "Arquitetos de software",
    description: "Que querem entender harness, orquestração multi-agente e trade-offs de produção",
    color: "text-primary"
  },
  {
    icon: Users2,
    title: "Founders e CTOs técnicos",
    description: "Que precisam avaliar build vs. buy e os riscos de agentes em produção",
    color: "text-secondary"
  }
];

const highlights = [
  {
    title: "Modelo mental completo de agentes",
    description: "Do 'o que é um agente' até 'como rodar em produção', sem lacunas."
  },
  {
    title: "Harness na prática",
    description: "Construa o loop de ferramentas, permissões e contexto que dá vida a um agente."
  },
  {
    title: "Computer Use sem mistério",
    description: "Como agentes operam interfaces (navegador, terminal) com segurança."
  },
  {
    title: "Checklist de produção",
    description: "Custo, segurança, avaliação e observability para levar direto ao time."
  }
];

export const WhoIsItFor = () => {
  return (
    <section id="para-quem-e-a-maratona" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <a
            href="#para-quem-e-a-maratona"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Para Quem é a</span>{" "}
              <span className="glow-cyan text-primary">Maratona Agentes de IA?</span>
            </h2>
          </a>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perfeita para quem constrói software e precisa dominar Agentes de IA na prática
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-card flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 inline-block">
            <p className="text-lg text-foreground max-w-2xl">
              <span className="font-semibold text-primary">Você não precisa ser especialista em IA para começar!</span>
              <br/>Basta saber programar. A Maratona Agentes de IA leva você da teoria ao harness em produção.
            </p>
          </Card>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <a
              href="#o-que-voce-vai-levar"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h3 id="o-que-voce-vai-levar" className="text-3xl md:text-4xl font-bold mb-3">
                <span className="text-foreground">O que você vai</span>{" "}
                <span className="glow-cyan text-primary">levar</span>
              </h3>
            </a>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clareza técnica, código real e direção para levar agentes ao seu time
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
