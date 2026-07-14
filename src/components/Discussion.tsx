import { Card } from "@/components/ui/card";

const questions = [
  "Os dois aquecimentos são aulas completas ou materiais assíncronos?",
  "Qual produto concreto o aluno deve terminar ao fim das quatro semanas?",
  "Quais ferramentas serão obrigatórias e quais ficarão a critério de cada professor?",
  "Os temas em avaliação entram na primeira turma ou formam uma continuação?"
];

export const Discussion = () => {
  return (
    <section id="mesa-dos-professores" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <a
            href="#mesa-dos-professores"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              04 / Mesa dos professores
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">O que precisamos</span>{" "}
              <span className="glow-cyan text-primary">decidir</span>
            </h2>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {questions.map((question, index) => (
            <Card
              key={index}
              className="p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 flex gap-4"
            >
              <span className="text-primary font-mono text-lg font-bold flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-foreground leading-relaxed">{question}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
