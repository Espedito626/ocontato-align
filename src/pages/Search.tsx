import { useState } from "react";
import { Search as SearchIcon, MapPin, Star, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const professionals = [
  {
    id: 1,
    name: "João Silva",
    category: "Eletricista",
    rating: 4.9,
    reviews: 127,
    location: "São Paulo, SP",
    price: "A partir de R$ 80",
    image: "1",
    verified: true
  },
  {
    id: 2,
    name: "Maria Santos",
    category: "Encanadora",
    rating: 4.8,
    reviews: 98,
    location: "Rio de Janeiro, RJ",
    price: "A partir de R$ 100",
    image: "2",
    verified: true
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    category: "Pintor",
    rating: 4.7,
    reviews: 156,
    location: "Belo Horizonte, MG",
    price: "A partir de R$ 60",
    image: "3",
    verified: true
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Search Header */}
      <section className="pt-32 pb-12 px-4 gradient-dark border-b border-border/50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Encontre o <span className="gradient-primary bg-clip-text text-transparent">profissional perfeito</span>
          </h1>
          
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por serviço ou profissional..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border/50"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {professionals.length} profissionais encontrados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((pro) => (
              <div
                key={pro.id}
                className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold">
                    {pro.image}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{pro.name}</h3>
                      <p className="text-sm text-muted-foreground">{pro.category}</p>
                    </div>
                    {pro.verified && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Verificado
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{pro.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({pro.reviews} avaliações)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    {pro.location}
                  </div>

                  <div className="text-sm font-medium mb-4">{pro.price}</div>

                  <Button className="w-full gradient-primary hover:shadow-glow transition-smooth">
                    <Phone className="h-4 w-4 mr-2" />
                    Contatar no WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
