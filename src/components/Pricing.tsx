import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const plans = [{
  name: "Basic",
  price: "9,99",
  description: "Sua vitrine digital sempre disponível",
  features: ["Perfil completo no site", "Gestão de serviços", "Receber avaliações", "Editar portfólio", "Suporte básico"],
  popular: false
}, {
  name: "Premium",
  price: "49,90",
  description: "Seja um dos 3 melhores da sua categoria",
  features: ["Tudo do Basic +", "Destaque nos top 3", "Prioridade no WhatsApp", "Selo Premium", "Métricas avançadas", "Suporte prioritário"],
  popular: true
}];
const Pricing = () => {
  return <section id="planos" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planos para 
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para fazer seu negócio crescer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map(plan => <div key={plan.name} className={`relative bg-card rounded-2xl p-8 shadow-card border transition-smooth hover:scale-105 ${plan.popular ? 'border-primary shadow-glow' : 'border-border/50 hover:border-primary/30'}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 gradient-primary rounded-full text-white text-sm font-medium shadow-glow">
                    <Star className="h-4 w-4 fill-white" />
                    Mais Popular
                  </div>
                </div>}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => <li key={index} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>
              
              <Button className={`w-full h-12 ${plan.popular ? 'gradient-primary hover:shadow-glow' : 'bg-secondary hover:bg-secondary/80'} transition-smooth`} size="lg">
                Começar agora
              </Button>
            </div>)}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-12">
          💳 Pagamento seguro via Stripe • Cancele quando quiser
        </p>
      </div>
    </section>;
};
export default Pricing;