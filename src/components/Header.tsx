import { Phone, Mail } from "lucide-react";
import ntcLogo from "@/assets/ntc-velka-bites.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={ntcLogo} alt="NTC s.r.o. - Skladová a nákladní vozidla MAN, servis vozidel Velká Bíteš" className="h-16 md:h-20 w-auto" style={{ imageRendering: 'auto' }} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <a 
              href="mailto:obchod@ntc-vb.cz" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">obchod@ntc-vb.cz</span>
            </a>
            
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
