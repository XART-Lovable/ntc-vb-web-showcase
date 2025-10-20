import mapaPobocek from "@/assets/mapa-pobocek.png";

const MapSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <a 
            href="https://hesti.cz/kontakt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transition-transform duration-300 hover:scale-[1.02]"
          >
            <img 
              src={mapaPobocek} 
              alt="Mapa poboček HESTI GROUP v České republice" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
