import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-6">
            О фонде ДобрыеЛапы
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Мы помогаем бездомным животным с 2019 года.
          </p>
          <p className="text-gray-600">
            За это время спасли более 2500 животных и нашли им любящие семьи.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
