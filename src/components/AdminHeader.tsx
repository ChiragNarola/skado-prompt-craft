import { useTranslation } from "react-i18next";
import { Link, useLocation ,useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import { Moon, User, Settings, LogOut, ChevronDown, Bell, HelpCircle, Shield } from 'lucide-react';
import { Button } from "react-day-picker";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const AdminHeader = () => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const currentUserEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/');
  };

  const pageInfo = {
  "/admin-dashboard": {
    title: t("adminheader.dashboardtitle"),
    subtitle: t("adminheader.dashboarddes")
  },
  "/admin-view-report": {
    title: t("adminheader.claimreporttitle"),
    subtitle: t("adminheader.claimreportdes")
  },
  "/admin-profile": {
    title: t("adminheader.myprofiletitle"),
    subtitle: t("adminheader.myprofiledes")
  },
};
  
  const { title, subtitle } = pageInfo[path] || {
  title: "Admin Panel",
  subtitle: "Manage your admin operations"
};
  
   const toggleDropdown = () => {
   setIsDropdownOpen(!isDropdownOpen);
  };
   
 
  return (
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between relative">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4">
          <LanguageSwitcher />

        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Moon className="w-5 h-5 text-gray-600" />
        </button>
        
        {/* Profile Dropdown Button */}
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
              KM
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">{t('adminheader.username')}</p>
              <p className="text-xs text-gray-500">{t('adminheader.userrole')}</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              
              {/* User Info Section */}
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">{t('adminusermenu.username')}</p>
                <p className="text-xs text-gray-500">{currentUserEmail}</p>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">{t('adminusermenu.myprofile')}</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">{t('adminusermenu.accountsettings')}</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <Shield className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">{t('adminusermenu.privacysecurity')}</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <Bell className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">{t('adminusermenu.notifications')}</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-gray-700 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">{t('adminusermenu.helpandsupport')}</span>
                </a>
              </div>

              {/* Logout Section */}
              <div className="border-t border-gray-100 pt-2">
                <button 
                  onClick={handleLogout}  className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 text-red-600 transition-colors w-full"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('adminusermenu.logout')}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </div>
                 
  );
};