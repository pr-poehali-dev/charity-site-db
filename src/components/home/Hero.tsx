import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Каждая жизнь
              <span className="text-emerald-600"> важна</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы спасаем бездомных животных, лечим их и находим любящий дом. За
              5 лет работы мы помогли более чем 2,500 животным обрести семью.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Link to="/donate">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Помочь сейчас
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть проекты
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-200 to-blue-200 rounded-3xl flex items-center justify-center">
              <div className="text-6xl">🐕</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">спасено</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
