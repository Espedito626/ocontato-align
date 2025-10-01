import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">OContato</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A forma mais rápida de conectar você aos melhores profissionais da sua cidade.
            </p>
            <div className="flex gap-3">
              <button className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button className="hover:text-primary transition-colors">Como funciona</button></li>
              <li><button className="hover:text-primary transition-colors">Planos</button></li>
              <li><button className="hover:text-primary transition-colors">Para prestadores</button></li>
              <li><button className="hover:text-primary transition-colors">Cases de sucesso</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button className="hover:text-primary transition-colors">Central de ajuda</button></li>
              <li><button className="hover:text-primary transition-colors">Contato</button></li>
              <li><button className="hover:text-primary transition-colors">Status do sistema</button></li>
              <li><button className="hover:text-primary transition-colors">FAQ</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button className="hover:text-primary transition-colors">Termos de uso</button></li>
              <li><button className="hover:text-primary transition-colors">Política de privacidade</button></li>
              <li><button className="hover:text-primary transition-colors">Contrato prestador</button></li>
              <li><button className="hover:text-primary transition-colors">LGPD</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2025 OContato. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;