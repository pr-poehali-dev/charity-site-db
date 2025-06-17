import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-gray-900 mb-6">
            Помогаем бездомным животным
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Спасаем, лечим и находим дом для каждого хвостика
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Link to="/donate">Помочь сейчас</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">Наши проекты</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
