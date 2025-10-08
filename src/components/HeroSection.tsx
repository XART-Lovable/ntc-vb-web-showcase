import heroImage from "@/assets/hero-truck-new.jpg";
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
      <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-foreground-dark/70" />
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <h1 className="text-5xl font-bold text-background mb-6 leading-tight">Skladová a nákladní vozidla</h1>
            <p className="text-xl text-background leading-relaxed">Přední český dodavatel a servis skladových a nákladních vozidel značky MAN i dalších značek. Poskytujeme komplexní řešení od prodeje nových i ojetých vozidel přes vlastní výrobu nástaveb až po autorizovaný servis. Díky dlouholetým zkušenostem a rozsáhlé servisní síti jsme spolehlivým partnerem pro všechny profesionály v oblasti užitkové dopravy.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative -mt-16 z-20">
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