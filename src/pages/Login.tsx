import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");
    if (email === "admin@admin.com") {
    navigate("/admin-dashboard");
  } else {
    navigate("/accident-type");
  }
    
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-login-bg bg-cover bg-no-repeat px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-strong p-8 md:p-10 animate-fade-in">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6 transition-transform hover:scale-105">
              <img src={logo} alt="Skado Logo" className="h-12 mx-auto" />
            </Link>
            <h1 className="font-heading text-h1 text-foreground mb-2">
              {t('login.title')}
            </h1>
            <p className="font-sans text-body text-muted-foreground">
              {t('login.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">{t('login.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('login.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t('login.password')}</Label>
                <Link to="/" className="text-sm text-primary hover:text-primary-dark transition-colors">
                  {t('login.forgotPassword')}
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder={t('login.passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
            >
              {t('login.loginButton')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {t('login.noAccount')}{" "}
              <Link to="/register" className="text-accent hover:text-accent-light font-medium transition-colors">
                {t('login.signUp')}
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              {t('login.terms')}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t('login.backToHome')}
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;