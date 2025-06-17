import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
              О фонде ДобрыеЛапы
            </h1>
            <p className="text-lg text-gray-600">
              История нашего фонда началась с желания помочь
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="font-semibold text-2xl mb-4">Наша история</h2>
              <p className="text-gray-600 mb-4">
                Фонд "ДобрыеЛапы" был основан в 2019 году группой
                единомышленников, которые не могли оставаться равнодушными к
                судьбе бездомных животных.
              </p>
              <p className="text-gray-600">
                За 5 лет работы мы выросли из небольшой инициативы в крупный
                благотворительный фонд с командой профессионалов.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border rounded-2xl p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Миссия</h3>
                <p className="text-gray-600">
                  Спасение, лечение и пристройство бездомных животных, создание
                  мира без страданий для наших четвероногих друзей.
                </p>
              </div>

              <div className="bg-white border rounded-2xl p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Eye" size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Видение</h3>
                <p className="text-gray-600">
                  Мир, где каждое животное имеет дом, заботу и любовь, а
                  общество осознанно относится к проблемам бездомности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
