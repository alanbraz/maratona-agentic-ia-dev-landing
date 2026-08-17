import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ExternalLink, Gift, Sparkles } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/checkout";

const plans = [
  {
    name: "Maratona Agentes de IA do jeito certo!",
    originalPrice: "R$ 1.245,00",
    price: "R$ 622,50 *",
    installments: "12x de R$ 51,88 no cartão",
    bonus: {
      title: "Maratona IA do jeito certo! inclusa (R$ 397,90)",
      description: "Uma trilha online de R$ 397,90, com acesso imediato, para aprender IA do zero, aplicar no trabalho e chegar à jornada de agentes com mais confiança.",
    },
    features: [
      "4 aulas ao vivo, 2 por semana, com os instrutores",
      "2 aquecimentos preparatórios e 4 aulas ao vivo",
      "Skills, MCPs e plugins",
      "Harness Engineering e Loop Engineering",
      "Gestão de tokens, custos e governança",
      "Ferramentas e exemplos reais, com princípios agnósticos a fornecedor"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="escolha-seu-plano" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-blue text-secondary">Garanta a Maratona Agentes de IA do jeito certo!</span>
          </h2>
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
                  <p className="text-2xl font-bold text-muted-foreground line-through">
                    {plan.originalPrice}
                  </p>
                  <p className="text-4xl font-bold text-primary glow-cyan">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground">{plan.installments}</p>
                  <p className="text-xs text-muted-foreground">* com o cupom de 50% da comunidade PullreCast</p>
                </div>
              </div>

              <div className="mb-8 rounded-xl border border-secondary/50 bg-secondary/10 p-5">
                <div className="flex items-center gap-2 text-secondary">
                  <Gift className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wide">Bônus de inscrição</span>
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="mt-3 font-semibold text-foreground">{plan.bonus.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{plan.bonus.description}</p>
                <a
                  href="https://maratona.ia.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                >
                  Ver conteúdo da Maratona IA
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
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
            * Desconto de 50% aplicado com o cupom da comunidade PullreCast. Parcelamento sujeito às condições da operadora do cartão.
          </p>
        </div>
      </div>
    </section>
  );
};
