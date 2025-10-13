import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Camera, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const STEPS = [
  { id: 1, name: "Photos", label: "Photos" },
  { id: 2, name: "License Plate", label: "License Plate" },
  { id: 3, name: "Description", label: "Description" },
  { id: 4, name: "Vehicle Info", label: "Vehicle Info" },
  { id: 5, name: "Location", label: "Location" },
  { id: 6, name: "Other Party", label: "Other Party" },
  { id: 7, name: "Summary", label: "Summary" },
];

const TEMPLATES = [
  "Rear-ended while stopped at traffic light",
  "Side collision at intersection",
  "Parking lot collision",
  "Hit parked vehicle",
  "Single vehicle accident - hit barrier/pole",
];

export default function AccidentReport() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    photos: [] as File[],
    licensePlate: "",
    description: "",
    vehicleOwnership: "",
    locationConsent: false,
    otherPartyType: "",
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
              <h2 className="text-2xl font-heading font-bold text-foreground">Upload Accident Photos</h2>
              <p className="text-muted-foreground">
                Take clear photos of vehicle damage, license plates, and the accident scene. Multiple angles help provide better documentation.
              </p>
            </div>

            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center space-y-6 bg-background hover:bg-accent/5 transition-colors">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-medium text-foreground">Drop photos here or click to browse</p>
                <p className="text-sm text-muted-foreground">Supports JPEG, PNG up to 10MB each</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <label htmlFor="file-upload">
                  <Button variant="outline" asChild>
                    <span className="cursor-pointer">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Browse Files
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
                  Take Photo
                </Button>
              </div>
            </div>

            {formData.photos.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="w-5 h-5" />
                <span>{formData.photos.length} photo(s) uploaded</span>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-heading font-bold text-foreground">Vehicle License Plate</h2>
              <p className="text-muted-foreground">
                Enter the license plate number of your vehicle or use our scanner for automatic detection.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="license-plate">License Plate Number</Label>
                <Input
                  id="license-plate"
                  placeholder="Enter license plate (e.g., AB12345)"
                  value={formData.licensePlate}
                  onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                />
              </div>

              <p className="text-center text-sm text-muted-foreground">Or scan automatically</p>

              <div className="border-2 border-border rounded-xl p-8 text-center space-y-4 bg-accent/5">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Camera className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">Automatic License Plate Recognition</p>
                  <p className="text-sm text-muted-foreground">Point your camera at the license plate</p>
                </div>
                <Button variant="default">Start Scanning</Button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-heading font-bold text-foreground">Describe the Incident</h2>
              <p className="text-muted-foreground">
                Provide a brief description of what happened. Be clear and factual.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Incident Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what happened during the accident..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[150px] resize-none"
                />
                <p className="text-xs text-muted-foreground">{formData.description.length}/500 characters</p>
              </div>

              <div className="space-y-3">
                <Label>Quick Templates</Label>
                <p className="text-sm text-muted-foreground">Select a template to get started:</p>
                <div className="space-y-2">
                  {TEMPLATES.map((template) => (
                    <button
                      key={template}
                      onClick={() => setFormData({ ...formData, description: template })}
                      className="w-full text-left px-4 py-3 border border-border rounded-lg hover:bg-accent/10 hover:border-accent transition-colors text-sm"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-heading font-bold text-foreground">Vehicle Ownership Information</h2>
              <p className="text-muted-foreground">
                Please specify your relationship to the vehicle involved in the accident.
              </p>
            </div>

            <div className="border border-border rounded-xl p-4 sm:p-6 bg-background">
              <Label className="text-base font-medium mb-4 block">Who owns this vehicle?</Label>
              <RadioGroup
                value={formData.vehicleOwnership}
                onValueChange={(value) => setFormData({ ...formData, vehicleOwnership: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="cursor-pointer flex-1 font-normal">
                    Personal vehicle (I own it)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="company" id="company" />
                  <Label htmlFor="company" className="cursor-pointer flex-1 font-normal">
                    Company vehicle
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="rental" id="rental" />
                  <Label htmlFor="rental" className="cursor-pointer flex-1 font-normal">
                    Rental vehicle
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="borrowed" id="borrowed" />
                  <Label htmlFor="borrowed" className="cursor-pointer flex-1 font-normal">
                    Borrowed from someone else
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
              <h2 className="text-2xl font-heading font-bold text-foreground">Accident Location</h2>
              <p className="text-muted-foreground">
                We'll capture the GPS coordinates of the accident location for accurate reporting.
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
                    I consent to sharing my location data
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Your location will be used only for this accident report and stored securely. This helps provide accurate documentation for insurance and legal purposes.
                  </p>
                </div>
              </div>

              <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
                <p className="text-sm text-warning-foreground">
                  <strong>Note:</strong> Location data helps provide accurate documentation and can be important for insurance claims and legal proceedings.
                </p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-heading font-bold text-foreground">Other Party Information</h2>
              <p className="text-muted-foreground">
                Help us identify the other party involved in the accident for confirmation.
              </p>
            </div>

            <div className="border border-border rounded-xl p-4 sm:p-6 bg-background">
              <Label className="text-base font-medium mb-4 block">Other Party Type</Label>
              <RadioGroup
                value={formData.otherPartyType}
                onValueChange={(value) => setFormData({ ...formData, otherPartyType: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="danish-mitid" id="danish-mitid" />
                  <Label htmlFor="danish-mitid" className="cursor-pointer flex-1 font-normal">
                    Danish resident (with MitID)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="foreign" id="foreign" />
                  <Label htmlFor="foreign" className="cursor-pointer flex-1 font-normal">
                    Foreign visitor/resident
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none" className="cursor-pointer flex-1 font-normal">
                    No other party involved
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-heading font-bold text-foreground">Report Summary</h2>
              <p className="text-muted-foreground">
                Review your accident report details before finalizing.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-border rounded-xl p-4 sm:p-6 bg-background space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Accident Type</h3>
                  <p className="text-sm bg-accent/10 inline-block px-3 py-1 rounded-full">Two-Vehicle Accident</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Photos Uploaded</h3>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{formData.photos.length} photos uploaded</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vehicle Information</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>License Plate:</strong> {formData.licensePlate || "Not provided"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Ownership:</strong> {formData.vehicleOwnership || "Not specified"}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Incident Description</h3>
                  <p className="text-sm text-muted-foreground">{formData.description || "No description provided"}</p>
                </div>
              </div>

              <div className="bg-accent/5 border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Complete Your Report</h3>
                <Button className="w-full" size="lg" variant="default">
                  Sign with MitID
                </Button>
                <Button className="w-full" variant="outline" size="lg">
                  Download PDF Report
                </Button>
                <div className="text-center text-xs text-muted-foreground pt-2">
                  <p>Report ID: AR-70759526</p>
                  <p>Generated: {new Date().toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
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
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
                      <img src={logo} alt="Skado Logo" className="h-8" />
                    </Link>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">Two-Vehicle Accident Report</h1>
          <p className="text-sm text-muted-foreground mt-1">Step {currentStep} of {STEPS.length}</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1 min-w-0">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-full">
                    {index > 0 && (
                      <div
                        className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 transition-colors ${
                          currentStep > index ? "bg-primary" : "bg-muted"
                        }`}
                        style={{ width: "calc(50% - 1rem)" }}
                      />
                    )}
                    {index < STEPS.length - 1 && (
                      <div
                        className={`absolute right-0 top-1/2 -translate-y-1/2 h-1 transition-colors ${
                          currentStep > step.id ? "bg-primary" : "bg-muted"
                        }`}
                        style={{ width: "calc(50% - 1rem)" }}
                      />
                    )}
                    <div className="flex justify-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors relative z-10 ${
                          currentStep === step.id
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
                    className={`hidden sm:inline-block text-xs font-medium transition-colors whitespace-nowrap ${
                      currentStep === step.id ? "text-primary" : "text-muted-foreground"
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

      {/* Progress Bar */}
      <div className="container mx-auto px-4 pt-0">
        <Progress value={progress} className="h-1" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background border border-border rounded-2xl shadow-soft p-5 sm:p-8 mb-6">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === STEPS.length}
              className="flex items-center gap-2"
            >
              {currentStep === STEPS.length ? "Complete" : "Next"}
              {currentStep < STEPS.length && <ArrowLeft className="w-4 h-4 rotate-180" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
