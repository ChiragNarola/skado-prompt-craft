import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { useTranslation } from "react-i18next";
import React from 'react';
import { Menu, Users, FileText, User, Settings, Mail, Shield, Crown, Moon } from 'lucide-react';

const AdminProfile = () => {
  const { t } = useTranslation();
    return(
     <div className="flex h-screen overflow-hidden">
      <AdminSidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
         <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
          {/* Personal Information Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-800">{t('adminprofile.personalinformation')}</h2>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium">
                  <Settings className="w-4 h-4" />
                  {t('adminprofile.editprofilelable')}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  {t('adminprofile.changepass')}
                </button>
              </div>
            </div>

            {/* Information Fields */}
            <div className="space-y-5">
              {/* Full Name */}
              <div className="flex items-start gap-3 py-3 border-b border-gray-100">
                <User className="w-5 h-5 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{t('adminprofile.fullnamelabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.fullnamevalue')}</p>
                </div>
                <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full font-medium">{t('adminprofile.fullnametag')}</span>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3 py-3 border-b border-gray-100">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{t('adminprofile.emaillabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.emailvalue')}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{t('adminprofile.emailtag')}</span>
              </div>

              {/* Role */}
              <div className="flex items-start gap-3 py-3 border-b border-gray-100">
                <Shield className="w-5 h-5 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{t('adminprofile.rolelabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.rolevalue')}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{t('adminprofile.roletag')}</span>
              </div>

              {/* Account Type */}
              <div className="flex items-start gap-3 py-3">
                <Crown className="w-5 h-5 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{t('adminprofile.accounttypelabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.accounttypevalue')}</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">{t('adminprofile.accounttypetag')}</span>
              </div>
            </div>
          </div>

          {/* Account Information Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{t('adminprofile.accountinformation')}</h2>
              <p className="text-sm text-gray-500">{t('adminprofile.accountinformation_desc')}</p>
            </div>
            {/* Two Column Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-5">
                {/* Member Since */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('adminprofile.membersincelabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.membersincevalue')}</p>
                </div>

                {/* Last Login */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('adminprofile.lastloginlabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.lastloginvalue')}</p>
                </div>

                {/* Account Status */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('adminprofile.accountstatuslabel')}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{t('adminprofile.accountstatusvalue')}</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                {/* Timezone */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('adminprofile.timezonelabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.timezonevalue')}</p>
                </div>

                {/* Language */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('adminprofile.languagelabel')}</p>
                  <p className="text-sm font-medium text-gray-800">{t('adminprofile.languagevalue')}</p>
                </div>

                {/* Notifications */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('adminprofile.notificationslabel')}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{t('adminprofile.notificationsvalue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminProfile;