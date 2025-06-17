import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState(1000);

  const presetAmounts = [500, 1000, 2500, 5000];

  const getImpact = (amount: number) => {
    if (amount >= 5000) return "Операция для животного";
    if (amount >= 2500) return "Месяц корма для 5 животных";
    if (amount >= 1000) return "Вакцинация 3 животных";
    return "Корм на неделю";
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
              Сделать пожертвование
            </h1>
            <p className="text-lg text-gray-600">Ваша помощь спасает жизни</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Выберите сумму</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="one-time">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="one-time">Разовый платёж</TabsTrigger>
                    <TabsTrigger value="monthly">Ежемесячно</TabsTrigger>
                  </TabsList>

                  <TabsContent value="one-time" className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset}
                          variant={amount === preset ? "default" : "outline"}
                          onClick={() => setAmount(preset)}
                          className="h-12"
                        >
                          {preset.toLocaleString()} ₽
                        </Button>
                      ))}
                    </div>

                    <div>
                      <Label htmlFor="custom-amount">Другая сумма</Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Введите сумму"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="monthly" className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Регулярные пожертвования помогают нам планировать работу
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[500, 1000, 2000, 3000].map((preset) => (
                        <Button
                          key={preset}
                          variant={amount === preset ? "default" : "outline"}
                          onClick={() => setAmount(preset)}
                          className="h-12"
                        >
                          {preset.toLocaleString()} ₽
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Помочь на {amount.toLocaleString()} ₽
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Ваш вклад
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🐾</div>
                    <div className="font-semibold text-lg text-gray-900 mb-1">
                      {getImpact(amount)}
                    </div>
                    <div className="text-sm text-gray-600">
                      На сумму {amount.toLocaleString()} ₽
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Способы оплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Icon name="CreditCard" size={20} />
                      <span className="text-sm">Банковская карта</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Icon name="Smartphone" size={20} />
                      <span className="text-sm">СБП</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Icon name="Building" size={20} />
                      <span className="text-sm">Банковский перевод</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Icon name="Wallet" size={20} />
                      <span className="text-sm">Электронный кошелёк</span>
                    </div>
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

export default Donate;
