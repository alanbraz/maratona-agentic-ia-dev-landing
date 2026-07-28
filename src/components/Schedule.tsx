import { Card } from "@/components/ui/card";
import { Radio, Trophy } from "lucide-react";

const weeks = [
  {
    week: "Semana 1",
    period: "Recursos, escolhas e capacidades",
    lessons: [
      {
        title: "Aula 1 • Gestão de Tokens",
        subtitle: "Recursos e escolhas",
        date: "terça, 01 de setembro",
        topics: [
          "Teoria: limites, diferenças entre modelos e a economia dos tokens de entrada e saída",
          "Prática: comparar uma mesma tarefa em modelos distintos e usar APIs gratuitas com critério",
          "O ativo mais caro do mundo: custo como decisão de engenharia"
        ]
      },
      {
        title: "Aula 2 • Skills Everywhere?",
        subtitle: "Capacidades reutilizáveis",
        date: "quinta, 03 de setembro",
        topics: [
          "Teoria: o que é uma skill, quando ela ajuda e onde a promessa de reutilização se rompe",
          "Prática: desenhar uma skill pequena, com instruções, recursos e critérios de saída claros",
          "Eficiência e limites das capacidades reutilizáveis"
        ]
      }
    ],
    challenge: {
      title: "Atividade da semana",
      description: "Medir e reduzir o custo de um fluxo real e aplicar uma skill em três tarefas reais, registrando consistência, falhas e ajustes"
    }
  },
  {
    week: "Semana 2",
    period: "O sistema ao redor do modelo e trabalho contínuo",
    lessons: [
      {
        title: "Aula 3 • Harness Engineering",
        subtitle: "O sistema ao redor do modelo",
        date: "terça, 08 de setembro",
        topics: [
          "Teoria: como contexto, ferramentas, permissões, memória e feedback determinam o resultado",
          "Prática: montar dois harnesses para a mesma LLM e observar a diferença de desempenho",
          "Ambiente é capacidade"
        ]
      },
      {
        title: "Aula 4 • Loop Engineering",
        subtitle: "Trabalho contínuo",
        date: "quinta, 10 de setembro",
        topics: [
          "Teoria: loops, estados, critérios de parada, observabilidade e recuperação de falhas",
          "Prática: construir um ciclo supervisionado que planeja, executa, verifica e tenta novamente",
          "IA trabalhando 24/7"
        ]
      }
    ],
    challenge: {
      title: "Atividade da semana",
      description: "Instrumentar o próprio ambiente e rodar um loop em uma tarefa longa, acompanhando seu comportamento e apresentando evidências"
    }
  }
];

export const Schedule = () => {
  return (
    <section id="conteudo-programa" className="py-24 px-4 bg-card/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <a
            href="#conteudo-programa"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="glow-cyan text-primary">A trilha da maratona</span>
            </h2>
          </a>
          <p className="text-xl text-muted-foreground">
            Duas semanas, quatro alavancas, duas aulas por semana. Cada aula tem 2h30, totalizando 10h de maratona. Cada encontro combina repertório, execução ao vivo e uma missão para aplicar durante a semana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {weeks.map((item, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.week} • 2 aulas
                  </p>
                  <h3 className="text-xl font-bold text-foreground">{item.period}</h3>
                </div>
              </div>

              <div className="space-y-5 mb-6 flex-1">
                {item.lessons.map((lesson, lessonIdx) => (
                  <div key={lessonIdx}>
                    <p className="text-sm font-semibold text-foreground">{lesson.title}</p>
                    <p className="text-xs text-primary mb-2">{lesson.subtitle}</p>
                    {lesson.date && (
                      <p className="text-xs font-medium text-secondary mb-2">📅 {lesson.date} • 2h30</p>
                    )}
                    <ul className="space-y-2">
                      {lesson.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-4 flex gap-3 items-start">
                <Trophy className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">{item.challenge.title}</p>
                  <p className="text-sm text-foreground">{item.challenge.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Marathon Period */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <div className="text-center">
            <a
              href="#maratona-5-desafios"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h3 id="maratona-5-desafios" className="text-2xl font-bold mb-2 text-foreground">
                Antes da largada
              </h3>
            </a>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dois aquecimentos formam uma base comum para que a turma comece a maratona falando a mesma língua.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="rounded-lg border border-border/60 bg-card/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Aquecimento A • Contexto</p>
                <h4 className="text-lg font-semibold text-foreground mb-2">Do Copiloto às Fábulas sobre Sol, Terra e Lua</h4>
                <p className="text-xs font-medium text-secondary mb-2">📅 quarta, 19 de agosto</p>
                <p className="text-sm text-muted-foreground">A história do desenvolvimento com IA, as mudanças de paradigma e como chegamos ao momento atual dos agentes.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Aquecimento B • Preparação</p>
                <h4 className="text-lg font-semibold text-foreground mb-2">Montando seu ambiente de trabalho com IA</h4>
                <p className="text-xs font-medium text-secondary mb-2">📅 terça, 25 de agosto</p>
                <p className="text-sm text-muted-foreground">Por onde começar: IDE, CLI, planos pagos, ferramentas essenciais e a configuração de computador necessária.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
