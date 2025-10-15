import { MapPin, Clock, Phone, Mail } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Prodej */}
          <div className="bg-card p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground-dark mb-6">Prodej</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Adresa:</p>
                  <p className="text-foreground">Průmyslová zóna Košíkov 81, 595 01 Velká Bíteš</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Otevírací doba:</p>
                  <p className="text-foreground">Po–Pá 7:00–16:00, So po dohodě</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Telefon:</p>
                  <p className="text-foreground">
                    <a href="tel:+420725409148" className="hover:text-primary transition-colors">+420 725 409 148</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Email:</p>
                  <p className="text-foreground">
                    
                    {", "}
                    <a href="mailto:tlm@ntc-vb.cz" className="hover:text-primary transition-colors">tlm@ntc-vb.cz</a>
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-foreground mb-6">
              V naší prodejní pobočce v průmyslové zóně Košíkov u Velké Bíteše nabízíme široký výběr nových i ojetých nákladních a užitkových vozidel značky MAN a návěsů. Naši odborníci rádi pomohou s výběrem vhodného vozidla přesně podle potřeb vaší firmy, zajistí financování i servisní služby. Spolehněte se na kvalitu, profesionální přístup a řešení na míru.
            </p>
            
            <div className="h-64 bg-muted rounded overflow-hidden">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Košíkov+81,+595+01+Velká+Bíteš&zoom=15" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Servis */}
          <div className="bg-card p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground-dark mb-6">Servis</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Adresa:</p>
                  <p className="text-foreground">Bantice 72, 671 61</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Help line 24:</p>
                  <p className="text-foreground">
                    <a href="tel:+420724249047" className="hover:text-primary transition-colors font-bold">724 249 047</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Telefon servis:</p>
                  <p className="text-foreground">
                    <a href="tel:+420724249047" className="hover:text-primary transition-colors">+420 724 249 047</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground-dark">Email:</p>
                  <p className="text-foreground">
                    <a href="mailto:servisznojmo@ntc-vb.cz" className="hover:text-primary transition-colors">servisznojmo@ntc-vb.cz</a>
                    {", "}
                    <a href="mailto:skladznojmo@ntc-vb.cz" className="hover:text-primary transition-colors">skladznojmo@ntc-vb.cz</a>
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-foreground mb-6">
              V autorizovaném servisním středisku v Banticích u Znojma nabízíme záruční i pozáruční servis vozidel MAN a návěsové techniky značek KRONE, Stas, Benalu, D-tech, Menci, Nooteboom, spolu s pozáručními opravami všech typů nákladních a užitkových vozidel.
            </p>
            
            <div className="h-64 bg-muted rounded overflow-hidden">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bantice+72,+671+61&zoom=15" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;