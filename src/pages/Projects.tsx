import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Приют 'Теплый дом'",
      description: "Строительство современного приюта для 100 животных",
      raised: 450000,
      target: 800000,
      status: "active",
      image: "🏠",
    },
    {
      id: 2,
      title: "Операция для Мухтара",
      description: "Сложная операция на позвоночнике",
      raised: 85000,
      target: 120000,
      status: "urgent",
      image: "🐕",
    },
    {
      id: 3,
      title: "Кастрация уличных кошек",
      description: "Программа стерилизации для контроля популяции",
      raised: 180000,
      target: 250000,
      status: "active",
      image: "🐱",
    },
    {
      id: 4,
      title: "Мобильная ветклиника",
      description: "Приобретение оборудованного автомобиля",
      raised: 300000,
      target: 300000,
      status: "completed",
      image: "🚐",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
              Наши проекты
            </h1>
            <p className="text-lg text-gray-600">
              Поддержите инициативы по спасению животных
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const progress = (project.raised / project.target) * 100;
              const statusColors = {
                active: "bg-blue-100 text-blue-800",
                urgent: "bg-red-100 text-red-800",
                completed: "bg-green-100 text-green-800",
              };

              return (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-4xl">{project.image}</div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}
                      >
                        {project.status === "active" && "Активный"}
                        {project.status === "urgent" && "Срочно"}
                        {project.status === "completed" && "Завершён"}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Собрано:</span>
                        <span className="font-semibold">
                          {project.raised.toLocaleString()} ₽
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="text-xs text-gray-500 text-right">
                        Цель: {project.target.toLocaleString()} ₽
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    {project.status === "completed" ? (
                      <Button variant="outline" className="w-full" disabled>
                        <Icon name="Check" size={16} className="mr-2" />
                        Завершён
                      </Button>
                    ) : (
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <Icon name="Heart" size={16} className="mr-2" />
                        Поддержать
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
