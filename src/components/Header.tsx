import { Phone, Mail } from "lucide-react";
import ntcLogo from "@/assets/ntc-logo-hq.jpg";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={ntcLogo} alt="NTC s.r.o." className="h-20 w-auto" style={{ imageRendering: 'auto' }} />
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="tel:+420602568721" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+420 602 568 721</span>
            </a>
            
            <a 
              href="mailto:truck@ntc-vb.cz" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-semibold">truck@ntc-vb.cz</span>
            </a>
            
            <a 
              href="tel:+420724249047" 
              className="flex items-center gap-2 text-foreground-dark hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Help line 24: +420 724 249 047</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
