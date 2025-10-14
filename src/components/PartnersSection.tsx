import manLogo from "@/assets/partners/man.png";
import kroneLogo from "@/assets/partners/krone.png";
import meilerLogo from "@/assets/partners/meiler.png";
import dtecLogo from "@/assets/partners/d-tec.png";
import stasLogo from "@/assets/partners/stas.png";
import nooteboomLogo from "@/assets/partners/nooteboom.png";
import lagendorfLogo from "@/assets/partners/lagendorf.png";
import omepsLogo from "@/assets/partners/omeps.jpg";

const PartnersSection = () => {
  const partners = [
    { name: "MAN", url: "https://hesti.cz/man/", image: manLogo },
    { name: "KRONE", url: "https://hesti.cz/kategorie-navesu/krone/", image: kroneLogo },
    { name: "MEILLER Kipper", url: "https://hesti.cz/kategorie-navesu/meiller/", image: meilerLogo },
    { name: "D-TEC", url: "https://hesti.cz/kategorie-navesu/d-tech/", image: dtecLogo },
    { name: "STAS", url: "https://hesti.cz/kategorie-navesu/stas/", image: stasLogo },
    { name: "Nooteboom Trailers", url: "https://hesti.cz/kategorie-navesu/nooteboom/", image: nooteboomLogo },
    { name: "Langendorf", url: "https://hesti.cz/kategorie-navesu/langendorf/", image: lagendorfLogo },
    { name: "o.me.p.s.", url: "https://hesti.cz/kategorie-navesu/omeps/", image: omepsLogo }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className="bg-white p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg grayscale hover:grayscale-0 flex items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                loading="lazy"
                className="w-full h-auto object-contain aspect-[5/2]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
