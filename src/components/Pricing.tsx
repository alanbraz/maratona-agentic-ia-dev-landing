import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Maratona Agentes de IA do jeito certo!",
    price: "R$ 1.299,00",
    installments: "12x de R$ 108,25 * no cartão",
    features: [
      "4 aulas ao vivo, 1 por semana, com os instrutores",
      "1 desafio prático por semana para aplicar no seu código",
      "Fundamentos, cronologia e evolução da IA",
      "Prompt engineering avançado, ferramentas, APIs e Computer Use",
      "Harness e orquestração multi-agente com código real",
      "Dados proprietários, deploy, monitoramento e governança"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="escolha-seu-plano" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <a
            href="#escolha-seu-plano"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glow-blue text-secondary">Garanta a Maratona Agentes de IA do jeito certo!</span>
            </h2>
          </a>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Garanta o conteúdo técnico completo por um valor acessível
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="p-8 relative bg-gradient-to-b from-primary/10 to-card border-primary hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-primary glow-cyan">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground">{plan.installments}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-border-cyan"
                  size="lg"
                >
                  Comprar Agora
                </Button>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Parcelamento sujeito às condições da operadora do cartão.
          </p>
        </div>
      </div>
    </section>
  );
};
