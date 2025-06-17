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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-gray-600">
              Мы всегда рады помочь и ответить на ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Написать нам</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input
                      id="subject"
                      placeholder="О чём хотите рассказать?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите подробнее..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Phone"
                        size={20}
                        className="text-emerald-600"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-gray-600">+7 (495) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Mail"
                        size={20}
                        className="text-emerald-600"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">info@dobrylapy.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="MapPin"
                        size={20}
                        className="text-emerald-600"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-gray-600">
                        г. Москва, ул. Примерная, д. 123
                        <br />
                        офис 456, 101000
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Clock"
                        size={20}
                        className="text-emerald-600"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-gray-600">
                        Пн-Пт: 9:00 - 18:00
                        <br />
                        Сб-Вс: 10:00 - 16:00
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Стать волонтёром</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Присоединяйтесь к нашей команде! Мы всегда ищем людей,
                    готовых помогать животным.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Users" size={16} className="mr-2" />
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Icon
                        name="Facebook"
                        size={20}
                        className="text-blue-600"
                      />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
                    >
                      <Icon
                        name="Instagram"
                        size={20}
                        className="text-pink-600"
                      />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    >
                      <Icon
                        name="Twitter"
                        size={20}
                        className="text-blue-500"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
