import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
          Помогаем бездомным животным
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Спасаем, лечим и находим дом для тех, кто в этом нуждается.
        </p>
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          <Icon name="Heart" size={20} className="mr-2" />
          Помочь
        </Button>
      </div>
    </section>
  );
};

export default Hero;
