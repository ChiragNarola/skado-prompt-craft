import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ArrowLeft, LogOut } from "lucide-react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  showBackButton?: boolean;
  handleBack?: () => void;
  backButtonText?: string;
  type?: string;
  showViewPolicyButton?: boolean;
  viewPolicyButtonText?: string;
}

export const Header = ({ handleBack = () => { }, backButtonText = "", type = "login", showViewPolicyButton = false, viewPolicyButtonText }: HeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isloginButton = localStorage.getItem("isLoggedIn");
  console.log(`🚀 ~ Header ~ localStorage.getItem("isLoggedIn"):`, localStorage.getItem("isLoggedIn"))

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    // Handle logout logic here (clear session, etc.)
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={type === "login" ? "/" : "/accident-type"} className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="Skado Logo" className="h-8" />
          </Link>

          {/* <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('header.home')}
            </Link>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              {t('header.howItWorks')}
            </a>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              {t('header.features')}
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {t('header.support')}
            </a>
          </nav> */}

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            {/* <Button variant="ghost" onClick={handleBack} className="h-10 px-4 sm:h-11 sm:px-6 py-3 gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{backButtonText}</span>
              </Button> */}



            {isloginButton &&
              <>
                <Link to="/accident-type">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">
                    {t('header.home')}
                  </Button>
                </Link>
                <Link to="/view-policy">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">
                    {viewPolicyButtonText || t('viewPolicy.title')}
                  </Button>
                </Link>
                <Button variant="ghost" onClick={handleLogout} className="h-10 px-4 sm:h-11 sm:px-6 py-3 gap-2"            >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('header.logout')}</span>
                </Button>
              </>
            }

            {!isloginButton && (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">{t('header.login')}</Button>
                </Link>
                <Link to="/login">
                  <Button variant="hero" size="default" className="h-10 px-4 sm:h-11 sm:px-6 py-3">{t('header.getStarted')}</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};