import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-8">
            Контакты
          </h1>
          <div className="space-y-6">
            <div>
              <Icon
                name="Phone"
                size={24}
                className="text-emerald-600 mx-auto mb-2"
              />
              <p className="text-lg">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon
                name="Mail"
                size={24}
                className="text-emerald-600 mx-auto mb-2"
              />
              <p className="text-lg">info@dobrylapy.ru</p>
            </div>
            <div>
              <Icon
                name="MapPin"
                size={24}
                className="text-emerald-600 mx-auto mb-2"
              />
              <p className="text-lg">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
