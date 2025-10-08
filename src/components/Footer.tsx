import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-foreground-dark text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NTC, s.r.o.</h3>
            <div className="space-y-2 text-sm">
              <p>CZ 671 61, Prosiměřice, Bantice 72</p>
              <p>IČO: 46905138</p>
              <p>DIČ: CZ46905138</p>
              <p className="mt-4">
                <strong>Centrála:</strong> Vlkovská 334, 595 01 Velká Bíteš
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-end">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="link" className="text-background hover:text-primary justify-start p-0">
                  Zásady zpracování osobních údajů (GDPR)
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Zásady zpracování osobních údajů</DialogTitle>
                </DialogHeader>
                <div className="prose prose-sm max-w-none">
                  <p>
                    V souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen „GDPR") Vás informujeme o zpracování Vašich osobních údajů a o Vašich právech.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">1. Správce osobních údajů</h3>
                  <p>
                    Správcem Vašich osobních údajů je:
                    <br />
                    <strong>NTC, s.r.o.</strong>
                    <br />
                    Bantice 72, 671 61 Prosiměřice
                    <br />
                    IČO: 46905138
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">2. Účel zpracování osobních údajů</h3>
                  <p>
                    Vaše osobní údaje zpracováváme za účelem:
                  </p>
                  <ul>
                    <li>Vyřízení Vašeho dotazu nebo objednávky</li>
                    <li>Poskytování našich služeb</li>
                    <li>Splnění zákonných povinností</li>
                    <li>Marketingové účely (pouze se Vaším souhlasem)</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-3">3. Právní základ pro zpracování</h3>
                  <p>
                    Osobní údaje zpracováváme na základě:
                  </p>
                  <ul>
                    <li>Vašeho souhlasu</li>
                    <li>Plnění smlouvy</li>
                    <li>Plnění právních povinností</li>
                    <li>Oprávněného zájmu správce</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-3">4. Doba uložení osobních údajů</h3>
                  <p>
                    Osobní údaje uchováváme po dobu nezbytnou k naplnění účelu jejich zpracování, případně po dobu stanovenou právními předpisy.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">5. Vaše práva</h3>
                  <p>Máte právo:</p>
                  <ul>
                    <li>Na přístup ke svým osobním údajům</li>
                    <li>Na opravu nepřesných údajů</li>
                    <li>Na výmaz údajů</li>
                    <li>Na omezení zpracování</li>
                    <li>Na přenositelnost údajů</li>
                    <li>Vznést námitku proti zpracování</li>
                    <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-3">6. Kontaktní údaje</h3>
                  <p>
                    Pro uplatnění svých práv nebo dotazy k ochraně osobních údajů nás kontaktujte:
                    <br />
                    Email: truck@ntc-vb.cz
                    <br />
                    Telefon: +420 602 568 721
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NTC s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
