import { Phone, Mail, Facebook } from "lucide-react";
import ntcLogo from "@/assets/ntc-logo-new.png";
import hestiLogo from "@/assets/logo-hesti.svg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-12">
            <img src={ntcLogo} alt="NTC s.r.o. - Skladová a nákladní vozidla MAN, servis vozidel Velká Bíteš" className="h-10 md:h-12 w-auto" style={{ imageRendering: 'auto' }} />
            <a href="https://hesti.cz/kontakt/o-nas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <img src={hestiLogo} alt="HESTI GROUP" className="h-12 md:h-14 w-auto" style={{ imageRendering: 'auto' }} />
              <div className="flex flex-col text-left">
                <span className="text-base text-foreground/70">člen skupiny</span>
                <span className="text-base font-semibold text-foreground">HESTI GROUP</span>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <a 
              href="tel:+420725409148" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">Prodej: +420 725 409 148</span>
            </a>
            
            <a 
              href="tel:+420724249047" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">Servis: +420 724 249 047</span>
            </a>
            
            <a 
              href="mailto:obchod@ntc-vb.cz" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">obchod@ntc-vb.cz</span>
            </a>
            
            <a 
              href="https://www.facebook.com/people/NTC-sro/61577946029562/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
