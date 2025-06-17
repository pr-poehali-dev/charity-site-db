import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl">
              ДобрыеЛапы
            </span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 ДобрыеЛапы</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
