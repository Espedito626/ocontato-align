import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"client" | "professional">("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup:", { name, email, password, userType });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 gradient-dark py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold">OContato</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Criar conta</h1>
          <p className="text-muted-foreground">
            Comece a conectar com profissionais
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setUserType("client")}
              className={`p-4 rounded-lg border-2 transition-smooth text-center ${
                userType === "client"
                  ? "border-primary bg-primary/10"
                  : "border-border/50 hover:border-border"
              }`}
            >
              <div className="font-medium">Cliente</div>
              <div className="text-xs text-muted-foreground mt-1">
                Buscar serviços
              </div>
            </button>
            <button
              type="button"
              onClick={() => setUserType("professional")}
              className={`p-4 rounded-lg border-2 transition-smooth text-center ${
                userType === "professional"
                  ? "border-primary bg-primary/10"
                  : "border-border/50 hover:border-border"
              }`}
            >
              <div className="font-medium">Prestador</div>
              <div className="text-xs text-muted-foreground mt-1">
                Oferecer serviços
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background border-border/50"
              />
            </div>

            <div className="text-xs text-muted-foreground">
              Ao criar uma conta, você concorda com nossos{" "}
              <button type="button" className="text-primary hover:underline">
                Termos de Uso
              </button>{" "}
              e{" "}
              <button type="button" className="text-primary hover:underline">
                Política de Privacidade
              </button>
            </div>

            <Button
              type="submit"
              className="w-full gradient-primary hover:shadow-glow transition-smooth"
              size="lg"
            >
              Criar conta
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Já tem uma conta? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
