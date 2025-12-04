import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-image1.jpg";
import trustImage from "@/assets/car_damage_image.png";
import wavebg from "@/assets/wave-bg.jpg";
import { Camera, FileText, Send, Shield, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleStartReport = () => {
    navigate('/accident-type');
  };

  const handleViewPolicy = () => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/view-policy');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 xl:pt-28 pb-16 bg-hero-bg bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">

              <h1 className="font-heading text-h1 text-foreground text-center md:text-left">
                {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight')}</span>
              </h1>

              <p className="font-sans text-body text-muted-foreground mb-8 text-center md:text-left">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">

                <Button variant="hero" size="lg" className="h-12 lg:h-14 px-8 lg:px-10" onClick={handleStartReport}>
                  {t('hero.startReport')}
                </Button>

                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="h-12 lg:h-14 px-8 lg:px-10">
                    {t('hero.learnMore')}
                  </Button>
                </a>

              </div>
              <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground justify-center md:justify-start">

                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>{t('hero.noSignup')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>{t('hero.quickProcess')}</span>
                </div>

              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src={heroImage}
                alt="Car accident damage illustration showing collision and vehicle damage"
                className="w-[75%] mx-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16 animate-fade-in">
            <h2 className="font-heading text-h2 mb-4 text-foreground">
              {t('howItWorks.title')}
            </h2>
            <p className="font-sans text-body text-muted-foreground max-w-2xl mx-auto">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                {t('howItWorks.step1Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('howItWorks.step1Desc')}
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                {t('howItWorks.step2Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('howItWorks.step2Desc')}
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-strong transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Send className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                {t('howItWorks.step3Title')}
              </h3>
              <p className="text-muted-foreground">
                {t('howItWorks.step3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 md:py-20 bg-[#f3f4f6] text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <img
                src={trustImage}
                alt="Insurance claim process and car damage assessment"
                className="w-full xl:w-[85%] rounded-sm mx-auto"
              />
            </div>
            <div className="order-1 lg:order-2 animate-slide-up">
              <div className="inline-block px-4 py-2 bg-primary rounded-full text-white font-medium text-sm mb-6">
                {t('trust.badge')}
              </div>
              <h2 className="font-heading text-h2 mb-6 text-foreground ">
                {t('trust.title')}
              </h2>
              <p className="font-sans text-body text-muted-foreground mb-8">
                {t('trust.description')}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{t('trust.security')}</h3>
                    <p className="text-muted-foreground text-sm">{t('trust.securityDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{t('trust.speed')}</h3>
                    <p className="text-muted-foreground text-sm">{t('trust.speedDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-14 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading text-h2 mb-6 text-foreground">
              {t('cta.title')}
            </h2>
            <p className="font-sans text-body text-muted-foreground mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* <Link to="/report"> */}
              <Button variant="hero" size="lg">
                {t('cta.button')}
              </Button>
              {/* </Link> */}

              <Button variant="outline" size="lg" onClick={handleViewPolicy}>
                {t('viewPolicy.title')}
              </Button>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;