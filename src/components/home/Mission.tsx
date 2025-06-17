import Icon from "@/components/ui/icon";

const Mission = () => {
  const values = [
    {
      icon: "Shield",
      title: "Спасение",
      description: "Находим и спасаем животных в критическом состоянии",
    },
    {
      icon: "Heart",
      title: "Лечение",
      description: "Обеспечиваем полную ветеринарную помощь",
    },
    {
      icon: "Home",
      title: "Пристройство",
      description: "Находим любящие семьи для каждого питомца",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
            Наша миссия
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы верим, что каждое животное заслуживает любви и заботы. Наша
            работа — это не просто спасение, это возвращение надежды.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={value.icon as any}
                  size={32}
                  className="text-emerald-600"
                />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
