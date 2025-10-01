import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 gradient-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              🚀 A forma mais rápida de encontrar profissionais
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Conecte-se aos melhores
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              profissionais
            </span>
            {" "}da sua cidade
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Do encanador ao mecânico. Da pizza ao fotógrafo.
            <br />
            <strong className="text-foreground">Encontre em minutos, conecte no WhatsApp.</strong>
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 p-2 bg-card rounded-xl shadow-card border border-border/50">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Ex: Preciso de um encanador urgente..."
                  className="pl-10 h-14 border-0 bg-secondary/50 text-lg focus-visible:ring-primary"
                />
              </div>
              <Button 
                size="lg" 
                className="h-14 px-8 gradient-primary hover:shadow-glow transition-smooth"
                onClick={() => navigate('/search')}
              >
                Buscar Agora
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/30">
            <div>
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">1200+</div>
              <div className="text-sm text-muted-foreground">Profissionais</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-muted-foreground">Cidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">4.8★</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;