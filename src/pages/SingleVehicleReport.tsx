import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Upload, Camera, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/Header";

export default function SingleVehicleReport() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const STEPS = [
    { id: 1, name: "Photos", label: t('singleVehicle.step1.label') },
    { id: 2, name: "License Plate", label: t('singleVehicle.step2.label') },
    { id: 3, name: "Description", label: t('singleVehicle.step3.label') },
    { id: 4, name: "Vehicle Info", label: t('singleVehicle.step4.label') },
    { id: 5, name: "Location", label: t('singleVehicle.step5.label') },
    { id: 6, name: "Summary", label: t('singleVehicle.step6.label') },
  ];

  const ACCIDENT_TYPES = [
    t('singleVehicle.accidentTypes.collision'),
    t('singleVehicle.accidentTypes.damage'),
    t('singleVehicle.accidentTypes.vandalism'),
    t('singleVehicle.accidentTypes.weather'),
    t('singleVehicle.accidentTypes.other'),
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    photos: [] as File[],
    licensePlate: "",
    description: "",
    accidentType: "",
    vehicleOwnership: "",
    locationConsent: false,
  });

  const progress = (currentStep / STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, photos: Array.from(e.target.files) });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-h2 text-foreground">{t('singleVehicle.step1.title')}</h2>
              <p className="font-sans text-body text-muted-foreground">
                {t('singleVehicle.step1.description')}
              </p>
            </div>

            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center space-y-6 bg-background hover:bg-accent/5 transition-colors">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-medium text-foreground">{t('singleVehicle.step1.dropzone')}</p>
                <p className="text-sm text-muted-foreground">{t('singleVehicle.step1.supportedFormats')}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <label htmlFor="file-upload">
                  <Button variant="outline" asChild>
                    <span className="cursor-pointer">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {t('singleVehicle.step1.browseFiles')}
                    </span>
                  </Button>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button variant="secondary" className="max-w-[169px] m-auto sm:m-0 w-full sm:w-auto">
                  <Camera className="w-4 h-4 mr-2" />
                  {t('singleVehicle.step1.takePhoto')}
                </Button>
              </div>
            </div>

            {formData.photos.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="w-5 h-5" />
                <span>{t('singleVehicle.step1.photosUploaded', { count: formData.photos.length })}</span>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-h2 text-foreground">{t('singleVehicle.step2.title')}</h2>
              <p className="font-sans text-body text-muted-foreground">
                {t('singleVehicle.step2.description')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="license-plate">{t('singleVehicle.step2.plateNumber')}</Label>
                <Input
                  id="license-plate"
                  placeholder={t('singleVehicle.step2.platePlaceholder')}
                  value={formData.licensePlate}
                  onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                />
              </div>

              <p className="text-center text-sm text-muted-foreground">{t('singleVehicle.step2.orScan')}</p>

              <div className="border-2 border-border rounded-xl p-8 text-center space-y-4 bg-accent/5">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Camera className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">{t('singleVehicle.step2.autoRecognition')}</p>
                  <p className="text-sm text-muted-foreground">{t('singleVehicle.step2.pointCamera')}</p>
                </div>
                <Button variant="default">{t('singleVehicle.step2.startScanning')}</Button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-h2 text-foreground">{t('singleVehicle.step3.title')}</h2>
              <p className="font-sans text-body text-muted-foreground">
                {t('singleVehicle.step3.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-border rounded-xl p-4 sm:p-6 bg-background">
                <Label className="text-base font-medium mb-4 block">{t('singleVehicle.step3.accidentTypeLabel')}</Label>
                <RadioGroup
                  value={formData.accidentType}
                  onValueChange={(value) => setFormData({ ...formData, accidentType: value })}
                  className="space-y-3"
                >
                  {ACCIDENT_TYPES.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <RadioGroupItem value={type} id={`type-${index}`} />
                      <Label htmlFor={`type-${index}`} className="cursor-pointer flex-1 font-normal">
                        {type}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">{t('singleVehicle.step3.descriptionLabel')}</Label>
                <Textarea
                  id="description"
                  placeholder={t('singleVehicle.step3.descriptionPlaceholder')}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[150px] resize-none"
                />
                <p className="text-xs text-muted-foreground">{t('singleVehicle.step3.characterCount', { count: formData.description.length })}</p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-h2 text-foreground">{t('singleVehicle.step4.title')}</h2>
              <p className="font-sans text-body text-muted-foreground">
                {t('singleVehicle.step4.description')}
              </p>
            </div>

            <div className="border border-border rounded-xl p-4 sm:p-6 bg-background">
              <Label className="text-base font-medium mb-4 block">{t('singleVehicle.step4.question')}</Label>
              <RadioGroup
                value={formData.vehicleOwnership}
                onValueChange={(value) => setFormData({ ...formData, vehicleOwnership: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="cursor-pointer flex-1 font-normal">
                    {t('singleVehicle.step4.personal')}
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="company" id="company" />
                  <Label htmlFor="company" className="cursor-pointer flex-1 font-normal">
                    {t('singleVehicle.step4.company')}
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="rental" id="rental" />
                  <Label htmlFor="rental" className="cursor-pointer flex-1 font-normal">
                    {t('singleVehicle.step4.rental')}
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="borrowed" id="borrowed" />
                  <Label htmlFor="borrowed" className="cursor-pointer flex-1 font-normal">
                    {t('singleVehicle.step4.borrowed')}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-h2 text-foreground">{t('singleVehicle.step5.title')}</h2>
              <p className="font-sans text-body text-muted-foreground">
                {t('singleVehicle.step5.description')}
              </p>
            </div>

            <div className="border border-border rounded-xl p-4 sm:p-6 bg-background space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="location-consent"
                  checked={formData.locationConsent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, locationConsent: checked as boolean })
                  }
                />
                <div className="space-y-1">
                  <Label htmlFor="location-consent" className="cursor-pointer font-medium">
                    {t('singleVehicle.step5.consent')}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {t('singleVehicle.step5.consentDesc')}
                  </p>
                </div>
              </div>

              <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
                <p className="text-sm text-warning-foreground">
                  <strong>{t('singleVehicle.step5.note')}</strong> {t('singleVehicle.step5.noteText')}
                </p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="font-heading text-h2 text-foreground">{t('singleVehicle.step6.title')}</h2>
              <p className="font-sans text-body text-muted-foreground">
                {t('singleVehicle.step6.description')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('singleVehicle.step6.accidentType')}</h3>
                <p className="text-sm bg-muted/50 inline-block px-3 py-2 rounded-full text-foreground">{t('singleVehicle.step6.singleVehicle')}</p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('singleVehicle.step6.photosUploaded')}</h3>
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('singleVehicle.step6.photosCount', { count: formData.photos.length })}</span>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('singleVehicle.step6.vehicleInfo')}</h3>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-sm font-medium text-foreground w-32">{t('singleVehicle.step6.licensePlate')}</span>
                    <span className="text-sm text-muted-foreground">{formData.licensePlate || t('singleVehicle.step6.notProvided')}</span>
                  </div>
                  <div className="flex">
                    <span className="text-sm font-medium text-foreground w-32">{t('singleVehicle.step6.ownership')}</span>
                    <span className="text-sm text-muted-foreground">{formData.vehicleOwnership || t('singleVehicle.step6.notSpecified')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('singleVehicle.step6.incidentType')}</h3>
                <p className="text-sm text-muted-foreground">{formData.accidentType || t('singleVehicle.step6.notSpecified')}</p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{t('singleVehicle.step6.incidentDesc')}</h3>
                <p className="text-sm text-muted-foreground">{formData.description || t('singleVehicle.step6.noDescription')}</p>
              </div>

              <div className="bg-accent/5 border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground">{t('singleVehicle.step6.completeReport')}</h3>
                <Button className="w-full" size="lg" variant="default">
                  {t('singleVehicle.step6.signMitid')}
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  {t('singleVehicle.step6.downloadPdf')}
                </Button>
                <div className="text-center text-xs text-muted-foreground pt-2">
                  <p>{t('singleVehicle.step6.reportId', { id: 'SV-70759526' })}</p>
                  <p>{t('singleVehicle.step6.generated', { date: new Date().toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) })}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="bg-background border-b border-border pt-20">
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="font-heading text-h2 text-foreground">{t('singleVehicle.title')}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t('singleVehicle.stepOf', { current: currentStep, total: STEPS.length })}</p>
        </div>
      </div>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1 min-w-0">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-full">
                    {index > 0 && (
                      <div
                        className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 transition-colors ${currentStep > index ? "bg-primary" : "bg-muted"
                          }`}
                        style={{ width: "calc(50% - 1rem)" }}
                      />
                    )}
                    {index < STEPS.length - 1 && (
                      <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 h-1 transition-colors ${currentStep > step.id ? "bg-primary" : "bg-muted"
                          }`}
                        style={{ width: "calc(50% - 1rem)" }}
                      />
                    )}
                    <div className="flex justify-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors relative z-10 ${currentStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : currentStep > step.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`hidden sm:inline-block text-xs font-medium transition-colors whitespace-nowrap ${currentStep === step.id ? "text-primary" : "text-muted-foreground"
                      }`}
                  >
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-0">
        <Progress value={progress} className="h-1" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background border border-border rounded-2xl shadow-soft p-5 sm:p-8 mb-6">
            {renderStepContent()}
          </div>

          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('singleVehicle.previous')}
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === STEPS.length}
              className="flex items-center gap-2"
            >
              {currentStep === STEPS.length ? t('singleVehicle.complete') : t('singleVehicle.next')}
              {currentStep < STEPS.length && <ArrowLeft className="w-4 h-4 rotate-180" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

