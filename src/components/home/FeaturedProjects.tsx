import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Приют 'Теплый дом'",
      description:
        "Строительство нового приюта для 100 животных с современным ветеринарным блоком",
      raised: 450000,
      target: 800000,
      image: "🏠",
    },
    {
      id: 2,
      title: "Операция для Мухтара",
      description:
        "Сложная операция на позвоночнике для пса, пострадавшего в ДТП",
      raised: 85000,
      target: 120000,
      image: "🐕",
    },
    {
      id: 3,
      title: "Кастрация уличных кошек",
      description:
        "Программа стерилизации бездомных кошек для контроля популяции",
      raised: 180000,
      target: 250000,
      image: "🐱",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
            Активные проекты
          </h2>
          <p className="text-lg text-gray-600">
            Поддержите наши текущие инициативы по спасению животных
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => {
            const progress = (project.raised / project.target) * 100;

            return (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-4xl mb-2 text-center">
                    {project.image}
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
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Поддержать
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">
              Посмотреть все проекты
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
