import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Tag, Users, ArrowRight } from "lucide-react";

export const CommunityDiscount = () => {
  return (
    <section id="desconto-comunidade" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Exclusivo para membros da comunidade</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-cyan text-primary">50% OFF</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faça parte da comunidade PullreCast no WhatsApp e receba um cupom exclusivo de 50% de desconto na Maratona Agentes de IA
          </p>
        </div>

        <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-card/80 border-primary/30 neon-border-cyan">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Tag className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Preço normal</p>
                    <p className="text-2xl font-bold text-muted-foreground line-through">R$ 2.490,00</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Com o cupom da comunidade</p>
                    <p className="text-4xl font-bold glow-cyan text-primary">R$ 1.245,00</p>
                    <p className="text-sm text-muted-foreground">em 12x de R$ 103,75 * no cartão</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                  Economia de R$ 1.245,00
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                  Cupom exclusivo
                </span>
              </div>
            </div>
            
            <div className="space-y-6 text-center md:text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Como resgatar seu desconto:
                </h3>
                <ol className="space-y-3 text-muted-foreground text-left">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
                    <span>Entre no grupo da comunidade PullreCast no WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
                    <span>Peça o cupom da Maratona IA no grupo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">3</span>
                    <span>Use o cupom na hora da compra e garanta 50% OFF</span>
                  </li>
                </ol>
              </div>
              
              <a 
                href="https://chat.whatsapp.com/Cn1C4gbqwYhL6zz0vZkT0u?mode=gi_t" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg neon-border-cyan group"
                >
                  Entrar no Grupo do WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Vagas limitadas no grupo. Garanta seu cupom de desconto agora mesmo!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
