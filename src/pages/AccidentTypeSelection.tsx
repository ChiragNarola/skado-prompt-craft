import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Car, CarFront, ParkingCircle, Bike, Lock, AlertTriangle } from "lucide-react";

const AccidentTypeSelection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");

  const accidentTypes = [
    {
      id: "singleVehicle",
      icon: Car,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      route: "/single-vehicle-report"
    },
    {
      id: "parkedCar",
      icon: ParkingCircle,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      route: "/single-vehicle-report"
    },
    {
      id: "multiVehicle",
      icon: CarFront,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      route: "/report"
    },
    {
      id: "theft",
      icon: Lock,
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      route: "/single-vehicle-report"
    },
    {
      id: "vandalism",
      icon: AlertTriangle,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
      route: "/single-vehicle-report"
    },
    {
      id: "cyclistPedestrian",
      icon: Bike,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      route: "/report"
    }
  ];

  const handleSelectionChange = (value: string) => {
    setSelectedType(value);
    const selected = accidentTypes.find(type => type.id === value);
    if (selected) {
      navigate(selected.route);
    }
  };

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
              {t('accidentType.title')}
            </h1>
            <p className="font-sans text-body text-muted-foreground max-w-3xl mx-auto">
              {t('accidentType.subtitle')}
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-8">
                {t('accidentType.formTitle')}
              </h2>

              <RadioGroup value={selectedType} onValueChange={handleSelectionChange} className="space-y-4">
                {accidentTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <div
                      key={type.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors ${selectedType === type.id ? 'bg-accent/10 border-primary' : ''
                        }`}
                    >
                      <RadioGroupItem value={type.id} id={type.id} className="mt-1 hidden" />
                      <Label
                        htmlFor={type.id}
                        className="flex-1 cursor-pointer space-y-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${type.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className={`h-6 w-6 ${type.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading text-lg font-semibold text-foreground">
                              {t(`accidentType.${type.id}.title`)}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {t(`accidentType.${type.id}.description`)}
                            </p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccidentTypeSelection;
