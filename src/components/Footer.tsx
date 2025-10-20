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
          
          <div className="flex flex-col justify-end space-y-2">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="link" className="text-background hover:text-primary justify-start p-0">
                  Zásady zpracování osobních údajů (GDPR)
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Informace o zpracování osobních údajů</DialogTitle>
                </DialogHeader>
                <div className="prose prose-sm max-w-none">
                  <p>
                    V kontextu vzájemného obchodního vztahu s naší společností dochází ke zpracování osobních údajů zákazníků, klientů a jiných současných či potencionálních obchodních partnerů.
                  </p>
                  
                  <p>
                    Osobní údaje fyzických osob jsou zpracovávány v souladu se zněním General Data Protection Regulation, nařízením Evropského parlamentu a Rady (EU) č. 2016/679, o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (obecné nařízení o ochraně osobních údajů) - dále v textu jen „GDPR", vnitřními předpisy společnosti a právními předpisy.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">1. Správce osobních údajů</h3>
                  <p>
                    Správce osobních údajů se odvíjí v závislosti na konkrétním právním vztahu s dotčenou fyzickou osobou.
                  </p>
                  
                  <p>Správcem osobních údajů je obchodní společnost:</p>
                  <ul>
                    <li><strong>BÍTEŠSKÁ DOPRAVNÍ SPOLEČNOST, spol. s r.o.</strong>, IČ: 46962816, se sídlem Velká Bíteš, Vlkovská 334, PSČ: 595 01, zapsaná v obchodním rejstříku vedeném Krajským soudem v Brně, oddíl C, vložka 6471,</li>
                    <li>a nebo obchodní společnost <strong>BDS-BUS, s.r.o.</strong>, IČ: 253 02 078, se sídlem Velká Bíteš, Vlkovská 334, PSČ: 595 01, zapsána v obchodním rejstříku vedeném Krajským soudem v Brně, oddíl C, vložka 23636,</li>
                    <li>a nebo obchodní společnost <strong>BDS-TRUCK, s.r.o.</strong>, IČ: 255 04 924, se sídlem Velká Bíteš, Vlkovská 334, PSČ: 595 01, zapsána v obchodním rejstříku vedeném Krajským soudem v Brně, oddíl C, vložka 27999,</li>
                    <li>a nebo obchodní společnost <strong>NTC, s.r.o.</strong>, IČ: 469 05 138, se sídlem Prosiměřice, Bantice 72, PSČ: 671 61, zapsaná v obchodním rejstříku vedeném Krajským soudem v Brně, oddělení C, vložka 6158,</li>
                  </ul>
                  <p>(dále v textu společně jen „společnost").</p>
                  
                  <p><strong>Kontaktní údaje:</strong></p>
                  <ul>
                    <li>Ing. Michal Kliment, tel.: +420 606 747 157, email: michal.kliment@bds-vb.cz,</li>
                    <li>kontaktní osoba pro ochranu osobních údajů – Mgr. Marta Jochová, tel.: +420 606 747 158, email: marta.jochova@gmail.com.</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-3">2. Jaké osobní údaje jsou zpracovávány, účel zpracování osobních údajů</h3>
                  <p>
                    V souvislosti se vzájemným obchodním vztahem jsou zpracovávány osobní údaje za účelem vedení evidence, plnění smluvních závazků a právních povinností stanovených právním řádem ČR.
                  </p>
                  <p>
                    Společnost zpracovává osobních údaje, které jí byly poskytnuty - zejména jména a příjmení, název společnosti (obchodní firma), doručovací nebo jiná kontaktní adresa, e-mailové adresy, telefonního číslo a dalších údaje naplňujících definici článku 4 GDPR (dále v textu jen „osobní údaje").
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">3. Právní titul zpracovávání osobních údajů, a doba zpracování</h3>
                  <p>
                    Osobní údaje jsou získávány při předsmluvních aktivitách, při uzavíraní závazkových vztahů, plnění smluvních povinností, z důvodu oprávněného zájmu. Osobní údaje jsou dále získávány na základě informovaného souhlasu se zpracováním osobních údajů. Ke zpracovávání osobních údajů dochází na základě ustanovení článku 6 odst. 1 písm. a) až f) GDPR).
                  </p>
                  <p>
                    Osobní údaje budou zpracovávány po dobu trvání právního vztahu, a po jeho skončení budou skartovány ve lhůtách a způsobem stanoveným příslušnými právními předpisy.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">4. Způsob zpracování osobních údajů, zabezpečení osobních údajů</h3>
                  <p>
                    Společnost se zavazuje plně respektovat důvěrný charakter poskytnutých osobních údajů, a zpracovávat osobní údaje v souladu se zásadou zákonnosti, korektnosti, transparentnosti, účelového omezení, minimalizace údajů, přesnosti, omezení uložení, integrity a důvěrnosti (článek 5 GDPR).
                  </p>
                  <p>
                    Osobní údaje jsou zabezpečeny a chráněny proti neoprávněnému zpracování. Osobní údaje jsou ukládány v databázi s přísným zabezpečením proti zneužití, poškození nebo zničení a nejsou poskytovány třetím stranám.
                  </p>
                  <p>
                    Při zpracování osobních údajů jsou zavedeny postupy a mechanismy k jejich zabezpečení a ochraně. Osobní údaje fyzických osob jsou zpracovávány pro stanovený účel, stanovenými prostředky a způsobem, který zajišťuje nejvyšší možnou bezpečnost osobních údajů a zabraňuje jakémukoliv neoprávněnému přístupu k osobním údajům. Osobní údaje jsou zpracovávány po stanovenou dobu.
                  </p>
                  <p>
                    V rámci společnosti jsou dodržována odpovídající technická a organizační opatření, tak aby bylo zajištěno zabezpečení odpovídající všem identifikovaným rizikům. Veškeré osoby, které přicházejí do styku s osobními údaji, tak činí v souladu s účelem zpracování, jsou k zpracování osobních údajů oprávněné, mají povinnost zpracovávat osobní údaje v souladu se zásadami GDPR, a mají povinnost dodržovat mlčenlivost.
                  </p>
                  <p>
                    Osobní údaje jsou poskytnuty třetím stranám pouze z důvodu plnění smluvních povinností nebo z důvodu splnění právních povinností. Třetí strana je povinna s osobními údaji nakládat dle pokynů společnosti a zpracovávat je v souladu se zásadami a povinnostmi stanovenými GDPR.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-3">5. Práva subjektů osobních údajů</h3>
                  <p>
                    V návaznosti na zpracovávání osobních údajů, má subjekt údajů následující práva - právo na přístup k osobním údajům (dle čl. 15 GDPR), právo na opravu (dle čl. 16 GDPR), právo na výmaz (dle čl. 17 GDPR), právo na omezení zpracování (dle čl. 18 GDPR), právo na přenositelnost údajů (dle čl. 20 GDPR), právo vznést námitku (dle čl. 21 GDPR), právo odvolat souhlas (dle čl. 7 GDPR). V případě pochybností o dodržování povinností souvisejících se zpracováním osobních údajů právo obrátit se na kontaktní osobu na email: marta.jochova@gmail.com nebo na Úřad na ochranu osobních údajů.
                  </p>
                  <p>
                    Udělený souhlas můžete odvolat kdykoli a bez udání důvodu zasláním zprávy o odvolání souhlasu na email: marta.jochova@gmail.com.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            <a 
              href="https://hesti.cz/vseobecne-obchodni-podminky/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background hover:text-primary text-sm underline-offset-4 hover:underline text-left"
            >
              Všeobecné obchodní podmínky
            </a>
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
