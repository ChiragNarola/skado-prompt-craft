import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LogOut, Menu, ArrowDown, ChevronUp, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/assets/logo.png";
import { useState } from "react";

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isloginButton = localStorage.getItem("isLoggedIn");
  const displayName = localStorage.getItem("userName") || localStorage.getItem("name") || "Your Name";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={isloginButton ? "/accident-type" : "/"} className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105">
            <img src={logo} alt="Skado Logo" className="h-7 object-contain" />
          </Link>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            {isloginButton &&
              <>
                <Link to="/accident-type">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">
                    {t('header.home')}
                  </Button>
                </Link>

                <Link to="/about-us">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">
                    {t('header.aboutus')}
                  </Button>
                </Link>

                <Link to="/view-policy">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">
                    {t('viewPolicy.title')}
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-10 px-2 sm:h-11 sm:px-3 py-3 gap-2" onClick={() => setDropdownOpen(!dropdownOpen)} >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={localStorage.getItem('avatarUrl') || undefined} alt={displayName} />
                        <AvatarFallback>{displayName?.slice(0, 1)}</AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:inline">{displayName}</span>
                      {dropdownOpen ?
                        (<ChevronUp className="w-4 h-4 text-gray-500 text-right" />) :
                        (<ChevronDown className="w-4 h-4 text-gray-500 text-right" />)
                      }
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={handleLogout}>{t('header.logout')}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            }

            {!isloginButton && (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="h-10 px-4 sm:h-11 sm:px-6 py-3">{t('header.login')}</Button>
                </Link>
                <Link to="/login">
                  <Button variant="hero" size="default" className="h-10 px-4 sm:h-11 sm:px-6 py-3">{t('header.getStarted')}</Button>
                </Link>

              </>
            )}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <div className="w-full flex items-center justify-center py-3">
                    <img src={logo} alt="Skado Logo" className="h-7 object-contain" />
                  </div>
                </SheetHeader>
                <div className="mt-2 px-3 pb-6 space-y-3">
                  {isloginButton ? (
                    <>
                    
                      <Link to="/accident-type">
                        <Button variant="ghost" className="w-full justify-start">{t('header.home')}</Button>
                      </Link>

                      <Link to="/view-policy">
                        <Button variant="ghost" className="w-full justify-start">{t('viewPolicy.title')}</Button>
                      </Link>

                    </>
                  ) : (
                    <>

                      <Link to="/login">
                        <Button variant="ghost" className="w-full justify-start">{t('header.login')}</Button>
                      </Link>

                      <Link to="/login">
                        <Button variant="hero" className="w-full justify-start">{t('header.getStarted')}</Button>
                      </Link>

                    </>
                  )}

                  <Link to="/login">
                    <Button variant="hero" className="w-full justify-start">test</Button>
                  </Link>

                  {isloginButton && (
                    <div className="sticky bottom-0 left-0 right-0 bg-background border-t pt-3 pb-3 px-0 shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
                      <div className="px-3">
                        <div className="rounded-xl border bg-card p-4 mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={localStorage.getItem('avatarUrl') || undefined} alt={displayName} />
                              <AvatarFallback>{displayName?.slice(0, 1)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-medium leading-5 truncate">{displayName}</span>
                              <span className="text-xs text-muted-foreground leading-4 truncate">{localStorage.getItem('userEmail') || ''}</span>
                            </div>
                          </div>
                          <Button variant="destructive" onClick={handleLogout} className="w-full mt-4 ">
                            {t('header.logout')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};