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
    title: "LLM local ou própria na nuvem",
    description: "Segurança dos dados, custo e o momento em que essa arquitetura realmente se justifica."
  },
  {
    title: "Agentes pessoais",
    description: "OpenClaw, Hermes e Odysseus como pontos de partida para agentes que acompanham o usuário."
  },
  {
    title: "Deploy de projetos em VMs",
    description: "Como tirar um projeto do computador pessoal e operá-lo em um ambiente remoto."
  },
  {
    title: "LGPD e IA",
    description: "Quando proteger dados, como reduzir exposição e como usar IA com informação sensível."
  }
];

export const WhoIsItFor = () => {
  return (
    <section id="para-quem-e-a-maratona" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Para Quem é a</span>{" "}
            <span className="glow-cyan text-primary">Maratona Agentes de IA?</span>
          </h2>
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

      </div>
    </section>
  );
};
