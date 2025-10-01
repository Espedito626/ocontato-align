import { MessageCircle, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Você busca",
    description: "Digite o que precisa: encanador, mecânico, pizzaria...",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Nós indicamos",
    description: "Mostramos os 3 melhores profissionais da sua região",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: MessageCircle,
    title: "Você conecta",
    description: "Contato direto no WhatsApp em 1 clique",
    color: "from-blue-700 to-blue-800"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como funciona o <span className="gradient-primary bg-clip-text text-transparent">OContato</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Simples, rápido e eficiente. Em 3 passos você resolve seu problema.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:border-primary/50 transition-smooth h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 shadow-glow`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-primary gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;