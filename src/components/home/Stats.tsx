import Icon from "@/components/ui/icon";

const Stats = () => {
  const stats = [
    {
      icon: "Users",
      value: "2,500+",
      label: "Спасённых животных",
    },
    {
      icon: "Home",
      value: "1,800+",
      label: "Нашли дом",
    },
    {
      icon: "Heart",
      value: "450+",
      label: "Волонтёров",
    },
    {
      icon: "Calendar",
      value: "5",
      label: "Лет работы",
    },
  ];

  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <div className="font-montserrat font-bold text-3xl mb-1">
                {stat.value}
              </div>
              <div className="text-emerald-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
