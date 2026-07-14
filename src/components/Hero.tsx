import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Flag, Sparkles, Target, Trophy } from "lucide-react";
const journeyDays = [
  { date: "Semana 1", title: "Aula 1", description: "Fundamentos, cronologia e arquiteturas de Agentes de IA", icon: Flag },
  { date: "Semana 2", title: "Aula 2", description: "Prompt engineering avançado, ferramentas, APIs e Computer Use", icon: Sparkles },
  { date: "Semana 3", title: "Aula 3", description: "Harness, orquestração e sistemas multiagente", icon: Target },
  { date: "Semana 4", title: "Aula 4", description: "Dados proprietários, deploy, monitoramento e governança", icon: Trophy }
];
// import logo from "@/assets/maratona.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />

      {/* Floating orbs with glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Logo */}
        {/* <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src={logo}
            alt="PullreCast"
            className="w-full md:w-[70%] animate-glow-pulse"
          />
        </div> */}

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm animate-fade-in">
          <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          <span className="text-sm text-muted-foreground">Turma ao vivo • Início: última semana de agosto de 2026</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
          <span className="block text-foreground mb-2">Maratona Agentes de IA</span>
          <span className="block glow-cyan text-primary">do jeito certo!</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-muted-foreground">
            Fundamentos, cronologia, computer use e harness — ao vivo, em 4 semanas
          </span>
        </h1>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/80 animate-fade-in">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>4 aulas ao vivo • 1 desafio prático por semana</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-primary rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>100% online • Turma com vagas limitadas</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
          Um caminho técnico e direto para entender e construir Agentes de IA de verdade — do conceito ao harness em produção, em turma ao vivo com desafios semanais.
        </p>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 animate-fade-in">
          {journeyDays.map((day) => {
            const Icon = day.icon;
            return (
              <div
                key={day.title}
                className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm px-4 py-4 text-left shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{day.date}</span>
                </div>
                <p className="mt-2 text-base font-semibold text-foreground">{day.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{day.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg neon-border-cyan"
            >
              Garantir Vaga
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-foreground hover:bg-secondary/10 px-8 py-6 text-lg"
            onClick={() => document.getElementById('conteudo-programa')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Conteúdo
          </Button>
        </div>

        {/* Price Highlight */}
        <div className="pt-8 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-2">Oferta única da Maratona Agentes de IA do jeito certo</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-5xl font-bold glow-cyan text-primary">R$ 1.299,00</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">em 12x de R$ 108,25 * no cartão</p>
        </div>
      </div>
    </section>
  );
};
