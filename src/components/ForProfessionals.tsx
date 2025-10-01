import { TrendingUp, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais clientes",
    description: "Seja encontrado por quem realmente precisa dos seus serviços"
  },
  {
    icon: Users,
    title: "Sem intermediários",
    description: "Contato direto no WhatsApp, sem comissões por trabalho"
  },
  {
    icon: Clock,
    title: "Gestão simples",
    description: "Controle tudo em um painel intuitivo e fácil de usar"
  },
  {
    icon: Shield,
    title: "Credibilidade",
    description: "Construa reputação com avaliações reais dos clientes"
  }
];

const ForProfessionals = () => {
  return (
    <section id="prestadores" className="py-24 px-4 gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                💼 Para Prestadores
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Faça seu negócio
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                crescer com o OContato
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Mais de 1.200 profissionais já confiam no OContato para encontrar novos clientes todos os dias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth">
                Criar minha conta grátis
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-smooth">
                Ver como funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium">
                    {i}k+
                  </div>
                ))}
              </div>
              <div>
                <div className="font-medium">4.8★ de avaliação</div>
                <div className="text-sm text-muted-foreground">por mais de 500 profissionais</div>
              </div>
            </div>
          </div>
          
          {/* Right Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/50 transition-smooth group"
              >
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-smooth">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProfessionals;