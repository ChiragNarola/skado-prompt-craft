import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {  Download, Phone, Mail, Calendar, Car, Shield, FileText, Eye, Edit, Trash2 } from "lucide-react";

const ViewPolicy = () => {
  const { t } = useTranslation();
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');
  const navigate = useNavigate();

  // Mock policy data - in a real app, this would come from an API
  const mockPoliciesData = [
    {
      id: 1,
      policyNumber: "POL-2024-001234",
      policyHolder: "John Doe",
      vehicle: {
        make: "Toyota",
        model: "Camry",
        year: "2022",
        licensePlate: "AB12345",
        vin: "1HGBH41JXMN109186"
      },
      coverage: {
        liability: "Full Coverage",
        comprehensive: "Included",
        collision: "Included",
        deductible: "$500"
      },
      premium: {
        monthly: "$125.00",
        annual: "$1,500.00",
        nextPayment: "2024-02-15"
      },
      effectiveDate: "2024-01-01",
      expirationDate: "2024-12-31",
      status: "active"
    },
    {
      id: 2,
      policyNumber: "POL-2024-001235",
      policyHolder: "Jane Smith",
      vehicle: {
        make: "Honda",
        model: "Civic",
        year: "2021",
        licensePlate: "CD67890",
        vin: "2HGBH41JXMN109187"
      },
      coverage: {
        liability: "Full Coverage",
        comprehensive: "Included",
        collision: "Included",
        deductible: "$750"
      },
      premium: {
        monthly: "$98.00",
        annual: "$1,176.00",
        nextPayment: "2024-02-20"
      },
      effectiveDate: "2024-01-15",
      expirationDate: "2025-01-14",
      status: "active"
    },
    {
      id: 3,
      policyNumber: "POL-2024-001236",
      policyHolder: "Mike Johnson",
      vehicle: {
        make: "Ford",
        model: "F-150",
        year: "2023",
        licensePlate: "EF11111",
        vin: "3HGBH41JXMN109188"
      },
      coverage: {
        liability: "Full Coverage",
        comprehensive: "Included",
        collision: "Included",
        deductible: "$1,000"
      },
      premium: {
        monthly: "$185.00",
        annual: "$2,220.00",
        nextPayment: "2024-02-25"
      },
      effectiveDate: "2024-02-01",
      expirationDate: "2025-01-31",
      status: "active"
    }
  ];

  const handleViewPolicy = (policy: any) => {
    setSelectedPolicy(policy);
    setViewMode('detail');
  };

  const handleUpdatePolicy = (policy: any) => {
    // Handle update logic here
    console.log('Update policy:', policy);
    // In a real app, this would open an update form or navigate to an update page
  };

  const handleDeletePolicy = (policyId: number) => {
    // Handle delete logic here
    console.log('Delete policy:', policyId);
    // In a real app, this would show a confirmation dialog and then delete
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedPolicy(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
       <Header showBackButton={true} backButtonText={t('viewPolicy.backToHome')} handleBack={() => navigate("/")} type="viewPolicy" />
  
      <main className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-h1 mb-6 text-foreground">
              {t('viewPolicy.title')}
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              {t('viewPolicy.subtitle')}
            </p>
          </div>

          {viewMode === 'list' ? (
            <>
              {/* Policies Table */}
              <div className="max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl shadow-soft p-6">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      Your Insurance Policies
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Manage and view all your insurance policies
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Policy Number</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Policy Holder</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Vehicle</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Premium</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                          <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockPoliciesData.map((policy) => (
                          <tr key={policy.id} className="border-b border-border hover:bg-muted/50">
                            <td className="py-3 px-4 text-sm font-medium text-foreground">
                              {policy.policyNumber}
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {policy.policyHolder}
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {policy.vehicle.year} {policy.vehicle.make} {policy.vehicle.model}
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {policy.premium.monthly}
                            </td>
                            <td className="py-3 px-4">
                              <Badge className={`${getStatusColor(policy.status)} text-xs font-medium px-2 py-1`}>
                                {t(`viewPolicy.${policy.status}`)}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleViewPolicy(policy)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleUpdatePolicy(policy)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeletePolicy(policy.id)}
                                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Back Button */}
              <div className="max-w-4xl mx-auto mb-6">
                <Button
                  variant="ghost"
                  onClick={handleBackToList}
                  className="flex items-center gap-2"
                >
                  ← Back to Policies List
                </Button>
              </div>
            </>
          )}

          {/* Policy Details Section */}
          {viewMode === 'detail' && selectedPolicy && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Policy Header */}
              <div className="bg-card rounded-2xl shadow-soft p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      {t('viewPolicy.policyDetails')}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Policy Number: {(selectedPolicy || mockPoliciesData[0]).policyNumber}
                    </p>
                  </div>
                  <Badge className={`${getStatusColor((selectedPolicy || mockPoliciesData[0]).status)} text-xs font-medium px-2 py-1`}>
                    {t(`viewPolicy.${(selectedPolicy || mockPoliciesData[0]).status}`)}
                  </Badge>
                </div>
              </div>

              {/* Policy Information List */}
              <div className="bg-card rounded-2xl shadow-soft p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t('viewPolicy.policyDetails')}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {/* Policy Holder Section */}
                  <div className="border-b border-border pb-4">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      {t('viewPolicy.policyHolder')}
                    </h4>
                    <ul className="space-y-2 ml-7">
                      <li className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-foreground">Name:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).policyHolder}</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">john.doe@example.com</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">+1 (555) 123-4567</span>
                      </li>
                    </ul>
                  </div>

                  {/* Vehicle Information Section */}
                  <div className="border-b border-border pb-4">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      {t('viewPolicy.vehicleInfo')}
                    </h4>
                    <ul className="space-y-2 ml-7">
                      <li className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-foreground">Vehicle:</span>
                        <span className="text-muted-foreground">
                          {(selectedPolicy || mockPoliciesData[0]).vehicle.year} {(selectedPolicy || mockPoliciesData[0]).vehicle.make} {(selectedPolicy || mockPoliciesData[0]).vehicle.model}
                        </span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-foreground">License Plate:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).vehicle.licensePlate}</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-foreground">VIN:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).vehicle.vin}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Coverage Details Section */}
                  <div className="border-b border-border pb-4">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {t('viewPolicy.coverage')}
                    </h4>
                    <ul className="space-y-2 ml-7">
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Liability Coverage:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).coverage.liability}</span>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Comprehensive:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).coverage.comprehensive}</span>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Collision:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).coverage.collision}</span>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Deductible:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).coverage.deductible}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Premium Information Section */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {t('viewPolicy.premium')}
                    </h4>
                    <ul className="space-y-2 ml-7">
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Monthly Premium:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).premium.monthly}</span>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Annual Premium:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).premium.annual}</span>
                      </li>
                      <li className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">Next Payment Due:</span>
                        <span className="text-muted-foreground">{(selectedPolicy || mockPoliciesData[0]).premium.nextPayment}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Policy Dates */}
              <div className="bg-card rounded-2xl shadow-soft p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Policy Period
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{t('viewPolicy.effectiveDate')}</p>
                    <p className="font-medium text-base">{(selectedPolicy || mockPoliciesData[0]).effectiveDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('viewPolicy.expirationDate')}</p>
                    <p className="font-medium text-base">{(selectedPolicy || mockPoliciesData[0]).expirationDate}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" className="flex items-center gap-2 px-6 py-3 text-sm font-medium">
                  <Download className="h-4 w-4" />
                  {t('viewPolicy.downloadPolicy')}
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2 px-6 py-3 text-sm font-medium">
                  <Phone className="h-4 w-4" />
                  {t('viewPolicy.contactSupport')}
                </Button>
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewPolicy;
