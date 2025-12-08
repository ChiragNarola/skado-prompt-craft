import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.png";
import React from 'react';
import { Download, Eye, FileText, Calendar, DollarSign, User, Filter } from 'lucide-react';

const AdminViewReport = () => {
   const { t } = useTranslation();
   const claims = t("adminviewclaimreportdata", { returnObjects: true });
   const STEPS = [
    { id: 1, name: "Photos", label: t('singleVehicle.step1.label') },
    { id: 2, name: "License Plate", label: t('singleVehicle.step2.label') },
    { id: 3, name: "Description", label: t('singleVehicle.step3.label') },
    { id: 4, name: "Vehicle Info", label: t('singleVehicle.step4.label') },
    { id: 5, name: "Location", label: t('singleVehicle.step5.label') },
    { id: 6, name: "Summary", label: t('singleVehicle.step6.label') },
  ];

    return(
     <div className="flex h-screen overflow-hidden">
      <AdminSidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('adminviewclaimreport.title')}</h1>
        <p className="text-sm text-gray-600">{t('adminviewclaimreport.subtitle')}</p>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-800">{t('adminviewclaimreport.filtertitle')}</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">{t('adminviewclaimreport.daterangelabel')}</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>{t('adminviewclaimreport.daterangelast30days')}</option>
              <option>{t('adminviewclaimreport.daterangelast3months')}</option>
              <option>{t('adminviewclaimreport.daterangelast6months')}</option>
              <option>{t('adminviewclaimreport.daterangelastyear')}</option>
              <option>{t('adminviewclaimreport.claimrangelabel')}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">{t('adminviewclaimreport.claimstatuslabel')}</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>{t('adminviewclaimreport.claimstatusall')}</option>
              <option>{t('adminviewclaimreport.statusapproved')}</option>
              <option>{t('adminviewclaimreport.statuspending')}</option>
              <option>{t('adminviewclaimreport.statusrejected')}</option>
              <option>{t('adminviewclaimreport.statusunderreview')}</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-2">{t('adminviewclaimreport.policyholderlabel')}</label>
            <input 
              type="text" 
              placeholder="Search by name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium">
              {t('adminviewclaimreport.applyfiltersbutton')}
            </button>
          </div>
        </div>
      </div>

      {/* Claims Reports Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Table Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{t('adminviewclaimreport.yourclaimsreportstitle')}</h2>
              <p className="text-sm text-gray-500">{t('adminviewclaimreport.yourclaimsreportssubtitle')}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm font-medium">
              <Download className="w-4 h-4" />
             {t('adminviewclaimreport.downloadallreportsbutton')}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                 {t('adminviewclaimreport.tableclaimnumber')}
                 
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {t('adminviewclaimreport.tablepolicyholder')}
                 
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                   {t('adminviewclaimreport.tableclaimdate')}
                
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {t('adminviewclaimreport.tableclaimamount')}
                
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {t('adminviewclaimreport.tablestatus')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {t('adminviewclaimreport.tableactions')}
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
               {Array.isArray(claims) && claims.map((item) => (
                 <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{item.claim_number}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-blue-600">{item.policy_holder}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.claim_date}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{item.claim_amount}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg" title="View Details">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-green-50 rounded-lg" title="Download Report">
                      <Download className="w-4 h-4 text-green-600" />
                    </button>
                  </div>
                </td>
              </tr>
                 ))}
            
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
             {t('adminviewclaimreport.paginationshowing')}
            {/* Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">47</span> results */}
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              {t('adminviewclaimreport.paginationprevious')}
             
            </button>
            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
               {t('adminviewclaimreport.paginationnext')}
          
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
 </div>
    );
};

export default AdminViewReport;