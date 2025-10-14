import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Skado Logo" className="h-8 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('footer.features')}</Link></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">{t('footer.howItWorks')}</a></li>
              <li><Link to="/" className="hover:text-accent transition-colors">{t('footer.pricing')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">{t('footer.about')}</Link></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{t('footer.support')}</a></li>
              <li><Link to="/" className="hover:text-accent transition-colors">{t('footer.privacy')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Skado. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};