import { Phone, Mail } from "lucide-react";
import ntcLogo from "@/assets/ntc-velka-bites-small.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={ntcLogo} alt="NTC s.r.o. - Skladová a nákladní vozidla MAN, servis vozidel Velká Bíteš" className="h-12 md:h-16 w-auto" style={{ imageRendering: 'auto' }} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <a 
              href="tel:+420602568721" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">+420 602 568 721</span>
            </a>
            
            <a 
              href="mailto:truck@ntc-vb.cz" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">truck@ntc-vb.cz</span>
            </a>
            
            <a 
              href="tel:+420724249047" 
              className="flex items-center gap-2 text-foreground-dark hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">Help line 24: +420 724 249 047</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
