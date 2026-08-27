import { Card } from "@/components/ui/card";
import { Radio, Trophy, Calendar } from "lucide-react";

const weeks = [
  {
    week: "Semana 1",
    period: "Capacidades e o sistema ao redor do modelo",
    lessons: [
      {
        title: "Aula 1 • Skills, MCPs e Plugins",
        subtitle: "Capacidades agênticas",
        date: "terça, 01 de setembro",
        time: "19h às 21h30",
        icsFile: "/calendar/aula1.ics",
        topics: [
          "Teoria: skills, agentes, subagentes, MCPs e plugins: onde cada peça começa, termina e se conecta",
          "Prática: inspecionar capacidades existentes e criar ou adaptar uma para um problema real",
          "Critérios de segurança, dependência, contexto e manutenção"
        ]
      },
      {
        title: "Aula 2 • Harness Engineering",
        subtitle: "O sistema ao redor do modelo",
        date: "quinta, 03 de setembro",
        time: "19h às 21h30",
        icsFile: "/calendar/aula2.ics",
        topics: [
          "Teoria: contexto, memória, ferramentas, permissões, estado, gates e evidências",
          "Prática: comparar configurações e construir um harness mínimo para um agente simples",
          "Por que a mesma inteligência apresenta resultados diferentes em ambientes diferentes"
        ]
      }
    ],
    challenge: {
      title: "Atividade da semana",
      description: "Criar uma capacidade reutilizável e desenhar um harness controlado para aplicá-la em uma tarefa real"
    }
  },
  {
    week: "Semana 2",
    period: "Trabalho contínuo, economia e governança",
    lessons: [
      {
        title: "Aula 3 • Loop Engineering",
        subtitle: "Como fazer a IA continuar trabalhando",
        date: "terça, 08 de setembro",
        time: "19h às 21h30",
        icsFile: "/calendar/aula3.ics",
        topics: [
          "Teoria: estado, planejamento, execução, observação, avaliação, retries, checkpoints e escalada humana",
          "Prática: construir um loop que executa, verifica, corrige e sabe quando parar",
          "Autonomia com critérios de sucesso, falha e parada verificáveis"
        ]
      },
      {
        title: "Aula 4 • Gestão de Tokens, Custos e Governança",
        subtitle: "Custo por resultado",
        date: "quinta, 10 de setembro",
        time: "19h às 21h30",
        icsFile: "/calendar/aula4.ics",
        topics: [
          "Tokens de entrada e saída, contexto, cache, reasoning, preços, APIs, gateways e formas de mensuração",
          "Como escolher planos, encontrar IAs gratuitas e selecionar o modelo ideal para cada tarefa",
          "Prática: comparar alternativas e montar uma política simples de orçamento e roteamento"
        ]
      }
    ],
    challenge: {
      title: "Atividade da semana",
      description: "Rodar um loop verificável e medir o custo por tarefa para tomar decisões de modelo e orçamento com evidências"
    }
  }
];

export const Schedule = () => {
  return (
    <section id="conteudo-programa" className="py-24 px-4 bg-card/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-cyan text-primary">O percurso da maratona</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Duas semanas, quatro alavancas, duas aulas por semana. Cada aula tem 2h30, totalizando 10h de maratona. Cada encontro combina repertório, execução ao vivo e uma missão para aplicar durante a semana.
          </p>
          <a
            href="/calendar/maratona-completa.ics"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-primary font-medium transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Adicionar todas as aulas ao calendário
          </a>
        </div>

        {/* Marathon Period */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
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
              Dois aquecimentos formam uma base comum para que a turma comece falando a mesma língua e usando a ferramenta que fizer mais sentido para cada pessoa.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="rounded-lg border border-border/60 bg-card/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Aquecimento A • Contexto</p>
                 <h4 className="text-lg font-semibold text-foreground mb-2">Como chegamos aos agentes</h4>
                 <p className="text-xs font-medium text-secondary mb-2">📅 quarta, 19 de agosto</p>
                 <a
                   href="https://youtube.com/live/mHbwi1fQg4I?feature=share&t=148"
                   target="_blank"
                   rel="noreferrer"
                   className="inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 mb-2"
                 >
                   Assistir à gravação
                 </a>
                 <p className="text-sm text-muted-foreground">Dos copilotos aos modelos com reasoning, ferramentas, MCPs, skills e agentes. Separando evolução incremental do que realmente muda a forma de trabalhar.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Aquecimento B • Preparação</p>
                 <h4 className="text-lg font-semibold text-foreground mb-2">Seu ambiente para trabalhar com agentes</h4>
                 <p className="text-xs font-medium text-secondary mb-2">📅 terça, 25 de agosto</p>
                 <a
                   href="https://youtube.com/live/5ErKODDSp78?feature=share&t=860"
                   target="_blank"
                   rel="noreferrer"
                   className="inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 mb-2"
                 >
                   Assistir à gravação
                 </a>
                 <p className="text-sm text-muted-foreground">Vamos instalar e configurar opções como Codex, Claude Code, Cursor, Antigravity, OpenCode e Hermes. Cada pessoa escolhe a ferramenta com que se sente mais à vontade.</p>
              </div>
            </div>
          </div>
        </Card>

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
                      <div className="mb-2">
                        <p className="text-xs font-medium text-secondary mb-1">
                          📅 {lesson.date} • {lesson.time || "2h30"}
                        </p>
                        {lesson.icsFile && (
                          <a
                            href={lesson.icsFile}
                            download
                            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                          >
                            <Calendar className="w-3 h-3" />
                            Adicionar ao calendário
                          </a>
                        )}
                      </div>
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

      </div>
    </section>
  );
};
