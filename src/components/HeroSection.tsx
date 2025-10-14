import heroImage from "@/assets/hero-truck.jpg";
import { Warehouse, Truck, TruckIcon, Container, Wrench } from "lucide-react";
const HeroSection = () => {
  const services = [{
    number: "1",
    title: "Skladová vozidla",
    icon: Warehouse
  }, {
    number: "2",
    title: "Nákladní vozy MAN",
    icon: Truck
  }, {
    number: "3",
    title: "Užitkové vozy MAN TGE",
    icon: TruckIcon
  }, {
    number: "4",
    title: "Návěsy",
    icon: Container
  }, {
    number: "5",
    title: "Servis vozidel",
    icon: Wrench
  }];
  return <section className="relative">
      <div className="relative h-[700px] md:h-[600px] bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-foreground-dark/70" />
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-background mb-4 md:mb-6 leading-tight">Váš partner pro nákup dopravní techniky</h1>
            <p className="text-base md:text-xl text-background leading-relaxed mb-24 md:mb-0">Poskytujeme komplexní řešení od prodeje nových i ojetých vozidel přes vlastní výrobu nástaveb až po autorizovaný servis. Jako člen skupiny HESTI GROUP navazujeme na silné zázemí a tradici v oblasti užitkové dopravy. Díky dlouholetým zkušenostem a rozsáhlé servisní síti jsme spolehlivým partnerem pro všechny profesionály.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative -mt-20 md:-mt-16 z-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {services.map(service => {
          const Icon = service.icon;
          return <div key={service.number} className="bg-card p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center font-bold">
                    {service.number}
                  </div>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground-dark group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HeroSection;