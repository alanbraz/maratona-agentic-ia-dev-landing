import { Card } from "@/components/ui/card";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/devolder.png";
import { Globe, Linkedin } from "lucide-react";

const instructors = [
  {
    name: "Marcus Devolder",
    role: "Cientista de Dados | Especialista em Soluções de IA",
    image: instructor3,
    bio: "Cientista de Dados com passagem por consultorias como a Globality IT Consulting, onde implementou agentes e assistentes de IA para acelerar projetos de clientes. Pós-graduado em Analytics e Business Intelligence pela PUC Minas, hoje se especializa em Engenharia de Inteligência Artificial e em levar Agentes de IA para dentro dos times de tecnologia.",
    website: null,
    linkedin: "https://www.linkedin.com/in/marcusdevolder/"
  },
  {
    name: "Matheus Bitencourt",
    role: "Especialista em Agentes de IA | Professor de MBA",
    image: instructor2,
    bio: "Especialista em Agentes de IA, Inovação e Vendas na IBM, professor de MBA em Inteligência Artificial e criador do podcast PullreCast, com mais de 10 anos de experiência como arquiteto de soluções, líder técnico e premiado por inovações e patentes.",
    website: "https://matheus.ia.br",
    linkedin: "https://www.linkedin.com/in/matheusbitencourt-ai/"
  },
  {
    name: "Alan Braz",
    role: "Arquiteto de Sistemas de IA Agêntica | Palestrante | Mentor",
    image: instructor1,
    bio: "Construindo e avaliando sistemas multiagentes desde 2017. Mestre em Engenharia de Software, Pesquisador e Gerente de Engenharia com mais de 20 anos em tecnologia. Palestrante e líder de workshops sobre agentes de IA em produção, avaliação e governança, com 15 patentes e 18 artigos publicados.",
    website: "https://alan.ia.br",
    linkedin: "https://www.linkedin.com/in/alanbraz"
  }
];

export const Instructors = () => {
  return (
    <section id="conheca-seus-instrutores" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Conheça seus</span>{" "}
            <span className="glow-cyan text-primary">Instrutores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conteúdo criado por especialistas que constroem Agentes de IA de verdade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <div className="mb-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-all"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">{instructor.name}</h3>
              <p className="text-primary font-medium mb-4">{instructor.role}</p>
              <p className="text-muted-foreground mb-6">{instructor.bio}</p>
              <div className="flex items-center justify-center gap-4">
                {instructor.website && (
                  <a
                    href={instructor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Website</span>
                  </a>
                )}
                <a
                  href={instructor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
