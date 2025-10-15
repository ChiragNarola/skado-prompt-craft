import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Car, Shield, Camera, MapPin, FileText } from "lucide-react";

const AccidentTypeSelection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Main Content */}
      {/* <main className="flex-1 pt-24 pb-16"> */}
      <main className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-heading text-h1 mb-6 text-foreground">
              {t('accidentType.title', 'Report Your Accident')}
            </h1>
            <p className="font-sans text-body text-muted-foreground max-w-3xl mx-auto">
              {t('accidentType.subtitle', 'Fast, secure, and legally compliant accident reporting. Get your report generated in minutes with digital signatures and GPS verification.')}
            </p>
          </div>

          {/* Accident Type Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Two-Vehicle Accident */}
            <div className="bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all p-8 animate-fade-in border border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  {t('accidentType.twoVehicle.title', 'Two-Vehicle Accident')}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t('accidentType.twoVehicle.description', 'Collision involving another vehicle. We\'ll help you connect with the other party for confirmation.')}
                </p>
                <Link to="/report">
                  <Button variant="hero" size="lg" className="w-full">
                    {t('accidentType.twoVehicle.button', 'Start Two-Vehicle Report')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Single-Vehicle Accident */}
            <div className="bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all p-8 animate-fade-in border border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
                  {t('accidentType.singleVehicle.title', 'Single-Vehicle Accident')}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t('accidentType.singleVehicle.description', 'Solo incident with no other parties involved. Quick and simple reporting process.')}
                </p>
                <Link to="/single-vehicle-report">
                  <Button variant="outline" size="lg" className="w-full">
                    {t('accidentType.singleVehicle.button', 'Start Single-Vehicle Report')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 animate-fade-in">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {t('accidentType.features.photo.title', 'Photo Documentation')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('accidentType.features.photo.description', 'Upload damage photos and license plates with built-in OCR')}
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {t('accidentType.features.gps.title', 'GPS Location')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('accidentType.features.gps.description', 'Automatic location capture with timestamp verification')}
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {t('accidentType.features.pdf.title', 'Legal PDF Report')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('accidentType.features.pdf.description', 'Generate legally compliant reports with digital signatures')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccidentTypeSelection;
