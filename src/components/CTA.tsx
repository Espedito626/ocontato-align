import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 gradient-dark">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-card rounded-3xl p-12 shadow-card border border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para começar?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se a mais de 1.200 profissionais que já encontram clientes todos os dias com o OContato
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-primary hover:shadow-glow transition-smooth group">
                Criar conta grátis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white transition-smooth">
                Falar com especialista
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              ✅ Sem cartão de crédito • ✅ Cancele quando quiser • ✅ Suporte especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;