import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // Handle registration logic here
    console.log("Registration attempt:", { firstName, lastName, email, password });

    localStorage.setItem("isLoggedIn", "true");
    // Redirect to accident type selection page after successful registration
    navigate("/accident-type");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-login-bg bg-cover bg-no-repeat px-4">
        <div className="w-full max-w-md mt-10">
          <div className="bg-card rounded-3xl shadow-strong p-8 md:p-10 animate-fade-in">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block mb-6 transition-transform hover:scale-105">
                <img src={logo} alt="Skado Logo" className="h-12 mx-auto" />
              </Link>
              <h1 className="font-heading text-h1 text-foreground mb-2">
                {t('register.title')}
              </h1>
              <p className="font-sans text-body text-muted-foreground">
                {t('register.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('register.firstName')}</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder={t('register.firstNamePlaceholder')}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('register.lastName')}</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder={t('register.lastNamePlaceholder')}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('register.email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('register.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t('register.password')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('register.passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t('register.confirmPassword')}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder={t('register.confirmPasswordPlaceholder')}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t('register.registerButton')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                {t('register.hasAccount')}{" "}
                <Link to="/login" className="text-accent hover:text-accent-light font-medium transition-colors">
                  {t('register.signIn')}
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                {t('register.terms')}
              </p>
            </div>
          </div>
          <div className="mt-6 text-center mb-10">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('register.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
