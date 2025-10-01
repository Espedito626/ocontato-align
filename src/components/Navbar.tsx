import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold">
              O<span className="gradient-primary bg-clip-text text-transparent">Contato</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="/planos" className="text-sm font-medium hover:text-primary transition-colors">
              Planos
            </a>
            <a href="/para-prestadores" className="text-sm font-medium hover:text-primary transition-colors">
              Para Prestadores
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Entrar
            </Button>
            <Button className="gradient-primary hover:shadow-glow transition-smooth">
              Cadastrar
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;