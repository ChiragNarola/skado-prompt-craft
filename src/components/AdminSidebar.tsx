import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from 'react';
import { useState } from "react";
import { Menu, Users, FileText, User, Settings, TrendingUp, Database } from 'lucide-react';
import { Button } from "react-day-picker";

export const AdminSidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;

  const getInitialMenu = () => {
    if (path === "/admin-dashboard") return "dashboard";
    if (path === "/admin-view-report") return "viewreport";
    if (path === "/admin-profile") return "myprofile";
    return "dashboard";
  };
  const [currentmenu, setCurrentMenu] = useState(getInitialMenu());
  const currentUserEmail = localStorage.getItem("userEmail");

  return (
    <div className="w-64 bg-gray-800 min-h-screen flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Menu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-white font-semibold">{t('adminsidebar.panelname')}</h2>
            <p className="text-gray-400 text-xs">{t('adminsidebar.paneldescription')}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 py-6">
        <div className="px-4 mb-4">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{t('adminsidebar.main')}</p>
        </div>
        
        <nav className="space-y-1 px-3">
          <Link to="/admin-dashboard" onClick={() => setCurrentMenu("dashboard")} className={`flex items-center gap-3 px-3 py-2.5 text-gray-300 ${currentmenu==="dashboard"?"text-white rounded-lg bg-gray-700":""} hover:bg-gray-700 hover:text-white rounded-lg "`}>
            <Menu className="w-5 h-5" />
            <span className="text-sm font-medium">{t('adminsidebar.dashboard')}</span>
          </Link>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{t('adminsidebar.usermanagement')}</span>
          </a>
          
          <Link to="/admin-view-report" onClick={() => setCurrentMenu("viewreport")} className={`flex items-center gap-3 px-3 py-2.5 text-gray-300 ${currentmenu==="viewreport"?"text-white rounded-lg bg-gray-700":""}  hover:bg-gray-700 hover:text-white rounded-lg`}>
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">{t('adminsidebar.viewreport')}</span>
          </Link>
          
          <Link to="/admin-profile" onClick={() => setCurrentMenu("myprofile")} className={`flex items-center gap-3 px-3 py-2.5 text-gray-300  ${currentmenu==="myprofile"?"text-white rounded-lg bg-gray-700":""} hover:bg-gray-700 hover:text-white rounded-lg  `}>
            <User className="w-5 h-5" />
                <span className="text-sm font-medium" >{t('adminsidebar.myprofle')}</span>
          </Link>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">{t('adminsidebar.settings')}</span>
          </a>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-300" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">{t('adminsidebar.username')}</p>
            <p className="text-gray-400 text-xs truncate">{currentUserEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};