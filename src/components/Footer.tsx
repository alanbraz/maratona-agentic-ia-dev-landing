import logo from "@/assets/logo_pr_neon_transparente.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <a href="https://pullrecast.dev" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="PullreCast" className="h-32" />
          </a>
          
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Maratona de Agentes
            </p>
            <p className="text-sm text-muted-foreground">
              Da assistência à autonomia — construa sistemas de IA que fazem trabalho real
            </p>
          </div>
          
          {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div> */}
          
          <p className="text-sm text-muted-foreground">
            © 2026 <a href="https://pullrecast.dev" target="_blank" rel="noopener noreferrer">PullreCast</a>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
