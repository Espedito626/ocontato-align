import { 
  Wrench, Zap, Paintbrush, Hammer, Bug, Flower, 
  Package, Key, Pizza, Car, Smartphone, Camera 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Wrench, name: "Encanador", slug: "encanador" },
  { icon: Zap, name: "Eletricista", slug: "eletricista" },
  { icon: Paintbrush, name: "Pintor", slug: "pintor" },
  { icon: Hammer, name: "Pedreiro", slug: "pedreiro" },
  { icon: Bug, name: "Dedetizador", slug: "dedetizador" },
  { icon: Flower, name: "Jardineiro", slug: "jardineiro" },
  { icon: Package, name: "Montador", slug: "montador-moveis" },
  { icon: Key, name: "Chaveiro", slug: "chaveiro" },
  { icon: Pizza, name: "Pizzaria", slug: "pizzaria" },
  { icon: Car, name: "Mecânico", slug: "mecanico" },
  { icon: Smartphone, name: "Celular", slug: "assistencia-celular" },
  { icon: Camera, name: "Fotógrafo", slug: "fotografo" },
];

const Categories = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Categorias populares
          </h2>
          <p className="text-xl text-muted-foreground">
            Encontre profissionais em mais de 18 categorias diferentes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.slug}
              className="group bg-card hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl p-6 transition-smooth hover:shadow-glow text-center"
            >
              <category.icon className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </button>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-smooth">
            Ver todas as categorias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;