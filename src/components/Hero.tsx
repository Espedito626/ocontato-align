import { useState } from "react";
import { Search, MapPin, Star, Phone, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchTerm || state || city) {
      setShowResults(true);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 gradient-dark">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in mb-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Conecte-se aos melhores
            <br />
            da sua cidade
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Do encanador ao mecânico. Da pizza ao fotógrafo.
            <br />
            <strong className="text-foreground">Encontre em minutos, conecte no WhatsApp.</strong>
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3 p-4 bg-card rounded-xl shadow-card border border-border/50">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Ex: Preciso de um encanador urgente..." 
                  className="pl-10 h-12 border-0 bg-secondary/50 text-base focus-visible:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger className="h-12 w-full md:w-[140px] bg-secondary/50 border-0">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                  <SelectItem value="BA">Bahia</SelectItem>
                </SelectContent>
              </Select>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="h-12 w-full md:w-[140px] bg-secondary/50 border-0">
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio">Rio de Janeiro</SelectItem>
                  <SelectItem value="bh">Belo Horizonte</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                size="lg" 
                className="h-12 px-8 gradient-primary hover:shadow-glow transition-smooth"
                onClick={handleSearch}
              >
                Buscar
              </Button>
            </div>
          </div>
        </div>

        {/* Results - 3 Cards */}
        {showResults && (
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {professionals.map((pro) => (
                <div
                  key={pro.id}
                  className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-smooth hover:shadow-glow"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold">
                      {pro.image}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{pro.name}</h3>
                        <p className="text-sm text-muted-foreground">{pro.category}</p>
                      </div>
                      {pro.verified && (
                        <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                          Verificado
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium text-sm">{pro.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({pro.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" />
                      {pro.location}
                    </div>

                    <div className="text-sm font-medium mb-3">{pro.price}</div>

                    <Button className="w-full gradient-primary hover:shadow-glow transition-smooth" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Contatar
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="group hover:border-primary/50 transition-smooth"
                onClick={() => navigate('/login')}
              >
                Veja mais perfis na sua cidade
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;