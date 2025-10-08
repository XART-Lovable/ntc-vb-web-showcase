import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const FacebookSection = () => {
  const images = [
    { src: gallery1, alt: "MAN tahač s klienty" },
    { src: gallery2, alt: "Mercedes-Benz s návěsem Skalak Transport" },
    { src: gallery3, alt: "MAN T-Agro nákladní vozidlo" },
    { src: gallery4, alt: "Modré MAN tahače v řadě" },
    { src: gallery5, alt: "MAN tahač v servisu" },
    { src: gallery6, alt: "Mercedes-Benz předání vozidla" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground-dark mb-4">Naše reference a realizace</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            Podívejte se na naše úspěšně dodané projekty a spokojené zákazníky.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground-dark/0 group-hover:bg-foreground-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
