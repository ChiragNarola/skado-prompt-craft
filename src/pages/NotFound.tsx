import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
  
const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton={false} />
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-h2">{t('notFound.pageNotFoundTitle')}</h1>
          <p className="mb-4 font-sans text-body text-gray-600">{t('notFound.pageNotFound')}</p>
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            {t('notFound.returnToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
