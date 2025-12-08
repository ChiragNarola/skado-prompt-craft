import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { useTranslation } from "react-i18next";
import { Menu, Users, FileText, User, Settings, TrendingUp, Database } from 'lucide-react';

const AdminDashboard = () => {
   const { t } = useTranslation();
    return(
     <div className="flex h-screen overflow-hidden">
      <AdminSidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
         <div className="flex-1 bg-gray-50 p-8">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">{t('admindashboard.totaluser')}</h3>
            {/* <TrendingUp className="w-5 h-5 text-gray-400" /> */}
          </div>
          <div className="mb-2">
            <p className="text-3xl font-bold text-gray-800">{t('admindashboard.totalusercount')}</p>
          </div>
          <p className="text-xs text-gray-500">{t('admindashboard.totaluserdes')}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">{t('admindashboard.activepolicydes')}</h3>
            {/* <TrendingUp className="w-5 h-5 text-gray-400" /> */}
          </div>
          <div className="mb-2">
            <p className="text-3xl font-bold text-gray-800">{t('admindashboard.activepolicycount')}</p>
          </div>
          <p className="text-xs text-gray-500">{t('admindashboard.activepolicydes')}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">{t('admindashboard.totalclaims')}</h3>
            {/* <Database className="w-5 h-5 text-gray-400" /> */}
          </div>
          <div className="mb-2">
            <p className="text-3xl font-bold text-gray-800">{t('admindashboard.totalclaimcount')}</p>
          </div>
          <p className="text-xs text-gray-500">{t('admindashboard.totalclaimdes')}</p>
        </div>
      </div>
    </div>
  </div>
 </div>
    );
};

export default AdminDashboard;