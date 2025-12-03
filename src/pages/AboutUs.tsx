import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.png";

const AboutUs=()=>{
     const { t } = useTranslation();
     const navigate = useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState(""); 
     return(
     <div className="min-h-screen flex flex-col">
    <Header/>
        
    <section className="py-8 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> {t('aboutus.title')}</h2>
                <p className="text-lg sm:text-sm md:text-lg text-gray-600 leading-relaxed mb-4">
                    {t('aboutus.dec1')}
                </p>
                <p className="text-lg sm:text-sm md:text-lg text-gray-900 font-semibold">
                   {t('aboutus.dec2')}
                </p>
            </div>
        </div>
    </section>
    <section className="py-16 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t('aboutus.firstsection')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutus.securitytitle')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                       {t('aboutus.securitydec')}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3"> {t('aboutus.speed')} </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {t('aboutus.speeddec')}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutus.Centereddesign')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {t('aboutus.Centereddesigndec')}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {t('aboutus.secondsection')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                     {t('aboutus.secondsectiondec')}
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('aboutus.mitid')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                         {t('aboutus.mitiddec')}
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('aboutus.gps')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                        {t('aboutus.gpsdec')}
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('aboutus.image')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                        {t('aboutus.imagedec')}
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12h-4.53L20 8.46V7.87L19.13 7 15 11.13V4.69L13.31 3h-.63L11 4.69V11.13L6.88 7 6 7.87v.59L8.53 12H4v1h4.53L6 16.54v.59l.88.87L11 13.87v6.44L12.69 22h.63L15 20.31v-6.44L19.13 18l.87-.87v-.59L17.47 13H22z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('aboutus.aiguidance')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                        {t('aboutus.aiguidancedec')}
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t('aboutus.multilingual')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                         {t('aboutus.multilingualdec')}
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100 hover:border-blue-300 transition-colors">
                    <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                         {t('aboutus.insurance')}
                    </h3>
                    <p className="text-gray-600 text-sm">
                         {t('aboutus.insurancedec')}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
     );
};
export default AboutUs;