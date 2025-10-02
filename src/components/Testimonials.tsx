import { Star } from "lucide-react";
const testimonials = [{
  name: "João Silva",
  role: "Encanador Premium",
  avatar: "JS",
  rating: 5,
  comment: "Desde que entrei no plano Premium, minha agenda está sempre cheia. Vale cada centavo!"
}, {
  name: "Maria Santos",
  role: "Eletricista",
  avatar: "MS",
  rating: 5,
  comment: "Melhor decisão que tomei! Contato direto no WhatsApp facilita muito meu trabalho."
}, {
  name: "Carlos Oliveira",
  role: "Mecânico",
  avatar: "CO",
  rating: 5,
  comment: "Sistema simples e eficiente. Recebo vários contatos por semana e meu negócio cresceu 300%."
}];
const Testimonials = () => {
  return <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem nossos 
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de quem transformou seu negócio com o OContato
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/50 transition-smooth">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              
              <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;