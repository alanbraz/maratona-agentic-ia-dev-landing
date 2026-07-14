import { Card } from "@/components/ui/card";
import { Radio, Trophy } from "lucide-react";

const weeks = [
  {
    week: "Semana 1",
    period: "Última semana de agosto de 2026",
    title: "Fundamentos, Cronologia & Arquiteturas de Agentes",
    topics: [
      "O que é (de fato) um Agente de IA: o loop percepção-raciocínio-ação",
      "Cronologia e evolução: de GPT-3/RLHF a function calling, ReAct e MCP",
      "Panorama de arquiteturas e frameworks: LangGraph, CrewAI, AutoGen, MCP, Claude Agent SDK"
    ],
    challenge: {
      title: "Desafio da semana 1",
      description: "Construa seu primeiro agente com tool/function calling"
    }
  },
  {
    week: "Semana 2",
    period: "1ª semana de setembro de 2026",
    title: "Prompt Engineering Avançado & Conexão com Ferramentas e APIs",
    topics: [
      "Prompt engineering avançado para agentes: raciocínio, few-shot e guardrails",
      "Integração de agentes com ferramentas e APIs externas",
      "Computer Use: como agentes operam navegador e terminal"
    ],
    challenge: {
      title: "Desafio da semana 2",
      description: "Computer Use — construa um agente que opera navegador e terminal com ferramentas reais"
    }
  },
  {
    week: "Semana 3",
    period: "2ª semana de setembro de 2026",
    title: "Harness, Orquestração & Multiagentes",
    topics: [
      "Anatomia de um harness: loop de ferramentas, permissões, memória e contexto",
      "Orquestração de sistemas multiagente: dividindo tarefas entre agentes especialistas",
      "Padrões de coordenação e subagentes"
    ],
    challenge: {
      title: "Desafio da semana 3",
      description: "Construa seu próprio harness com orquestração multi-agente"
    }
  },
  {
    week: "Semana 4",
    period: "3ª semana de setembro de 2026",
    title: "Dados Proprietários, Deploy, Monitoramento & Governança",
    topics: [
      "Contextualização com dados proprietários (RAG avançado)",
      "Deploy, monitoramento e escalabilidade de agentes em produção",
      "Segurança e governança: prompt injection, sandboxing, human-in-the-loop"
    ],
    challenge: {
      title: "Desafio final",
      description: "Leve um agente para produção com observability, custo controlado e segurança"
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
              <span className="glow-cyan text-primary">Conteúdo da Maratona</span>
            </h2>
          </a>
          <p className="text-xl text-muted-foreground">
            4 semanas, 4 aulas ao vivo, 1 desafio prático por semana — baseado no currículo técnico da{" "}
            <a
              href="https://iftl.ai/ai-4-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              IFTL AI 4 Tech
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {weeks.map((item, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.week} • Aula ao vivo • {item.period}
                  </p>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {item.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

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
                Como funciona o programa
              </h3>
            </a>
            <p className="text-muted-foreground">
              Turma ao vivo e online, com início previsto para a última semana de agosto de 2026. Uma aula por semana,
              durante 4 semanas, sempre seguida de um desafio prático para aplicar o conteúdo no seu próprio código.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
