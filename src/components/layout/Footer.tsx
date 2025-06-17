import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                ДобрыеЛапы
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Благотворительный фонд помощи бездомным животным. Мы спасаем,
              лечим и находим дом для тех, кто в этом нуждается.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Пожертвования
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@dobrylapy.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ДобрыеЛапы. Все права защищены.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Лицензия на благотворительную деятельность №12345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
