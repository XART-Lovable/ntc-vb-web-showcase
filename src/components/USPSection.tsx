import { Network, Factory, Award, Boxes } from "lucide-react";

const USPSection = () => {
  const usps = [
    {
      icon: Network,
      title: "Největší servisní síť v ČR",
      description: "11 servisních poboček",
    },
    {
      icon: Factory,
      title: "Vlastní výroba",
      description: "Nástavby pro užitková vozidla i návěsy",
    },
    {
      icon: Award,
      title: "Certifikovaný prodejce",
      description: "Prodej nových i ojetých tahačů MAN",
    },
    {
      icon: Boxes,
      title: "Velký výběr návěsů",
      description: "Široká nabídka všech značek a druhů",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">Proč si vybrat NTC?</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            Jsme komplexním partnerem v oblasti užitkové dopravy s dlouholetými zkušenostmi a špičkovými službami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-2">{usp.title}</h3>
                <p className="text-foreground">{usp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
