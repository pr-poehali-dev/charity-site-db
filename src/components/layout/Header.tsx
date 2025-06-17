import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              ДобрыеЛапы
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              О нас
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive("/projects")
                  ? "text-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Проекты
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-emerald-600"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Контакты
            </Link>
          </nav>

          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/donate">
              <Icon name="Heart" size={16} className="mr-2" />
              Помочь
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
