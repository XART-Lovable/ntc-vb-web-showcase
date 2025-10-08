import { Facebook } from "lucide-react";

const FacebookSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Facebook className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground-dark">Sledujte nás na Facebooku</h2>
          </div>
          <p className="text-foreground max-w-2xl mx-auto">
            Buďte v obraze o našich nejnovějších vozidlech, speciálních nabídkách a aktuálním dění v NTC s.r.o.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 shadow-lg">
            <div 
              className="fb-page" 
              data-href="https://www.facebook.com/hesti.cz/pobocky/ntc-s-r-o-prodej/" 
              data-tabs="timeline" 
              data-width="500" 
              data-height="600" 
              data-small-header="false" 
              data-adapt-container-width="true" 
              data-hide-cover="false" 
              data-show-facepile="true"
            >
              <blockquote cite="https://www.facebook.com/hesti.cz/pobocky/ntc-s-r-o-prodej/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/hesti.cz/pobocky/ntc-s-r-o-prodej/">NTC s.r.o. - Prodej</a>
              </blockquote>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.facebook.com/hesti.cz/pobocky/ntc-s-r-o-prodej/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-semibold hover:bg-primary/90 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Navštívit naši stránku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
