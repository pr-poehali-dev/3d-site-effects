import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [calculatorData, setCalculatorData] = useState({
    pages: 5,
    features: [] as string[],
    design: 'standard'
  });

  const services = [
    {
      icon: 'Code2',
      title: 'Разработка сайтов',
      description: 'Создание мощных веб-приложений с современным стеком технологий',
      features: ['React/Vue', 'Node.js', 'TypeScript', 'API Integration']
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Нативные и кроссплатформенные приложения для iOS и Android',
      features: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      description: 'Современный дизайн интерфейсов с фокусом на пользователя',
      features: ['Figma', 'Прототипы', 'Адаптивность', 'Анимации']
    },
    {
      icon: 'Zap',
      title: 'Оптимизация',
      description: 'Улучшение производительности и SEO ваших проектов',
      features: ['Скорость', 'SEO', 'Аналитика', 'Безопасность']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '50 000',
      description: 'Для небольших проектов',
      features: ['До 5 страниц', 'Адаптивный дизайн', 'Базовое SEO', '1 месяц поддержки']
    },
    {
      name: 'Professional',
      price: '150 000',
      description: 'Для среднего бизнеса',
      features: ['До 15 страниц', 'Кастомный дизайн', 'Продвинутое SEO', '3 месяца поддержки', 'Админ-панель'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '500 000+',
      description: 'Для крупных компаний',
      features: ['Без ограничений', 'Уникальный дизайн', 'Полное SEO', '12 месяцев поддержки', 'API интеграции', 'Аналитика']
    }
  ];

  const team = [
    { name: 'Александр Doom', role: 'Lead Developer', icon: 'Skull' },
    { name: 'Мария Blood', role: 'UI/UX Designer', icon: 'Flame' },
    { name: 'Дмитрий Dark', role: 'Backend Architect', icon: 'Swords' },
    { name: 'Елена Shadow', role: 'Project Manager', icon: 'Crown' }
  ];

  const featureOptions = [
    { id: 'blog', label: 'Блог', price: 30000 },
    { id: 'shop', label: 'Интернет-магазин', price: 80000 },
    { id: 'auth', label: 'Авторизация', price: 20000 },
    { id: 'payment', label: 'Оплата онлайн', price: 40000 },
    { id: 'admin', label: 'Админ-панель', price: 50000 }
  ];

  const calculatePrice = () => {
    const basePrice = calculatorData.pages * 8000;
    const featuresPrice = calculatorData.features.reduce((sum, featureId) => {
      const feature = featureOptions.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    const designMultiplier = calculatorData.design === 'premium' ? 1.5 : calculatorData.design === 'custom' ? 2 : 1;
    return Math.round((basePrice + featuresPrice) * designMultiplier);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-doom-gradient text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Flame" className="text-primary animate-pulse-fire" size={32} />
              <h1 className="text-2xl font-bold text-fire-glow">DOOM STUDIOS</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'services', 'about', 'pricing', 'calculator'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`uppercase text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'services' ? 'Услуги' : 
                   section === 'about' ? 'О нас' : 
                   section === 'pricing' ? 'Тарифы' :
                   'Калькулятор'}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <Icon name="Swords" size={80} className="text-primary animate-pulse-fire" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-fire-glow">
            СОЗДАЕМ САЙТЫ
            <br />
            НОВОГО УРОВНЯ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Мощные веб-решения для вашего бизнеса. Разработка, дизайн, поддержка.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 hover-lift"
              onClick={() => scrollToSection('calculator')}
            >
              <Icon name="Calculator" size={24} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-foreground font-bold text-lg px-8 py-6 hover-lift"
              onClick={() => scrollToSection('services')}
            >
              <Icon name="Sparkles" size={24} className="mr-2" />
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-fire-glow">НАШИ УСЛУГИ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Полный спектр разработки для вашего проекта</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="p-6 bg-card border-primary/20 hover-lift cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4">
                  <Icon name={service.icon as any} size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="Flame" size={16} className="text-secondary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-fire-glow">НАША КОМАНДА</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Профессионалы темных искусств разработки</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="text-center animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover-lift">
                  <Icon name={member.icon as any} size={64} className="text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-fire-glow">ТАРИФЫ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите подходящий план для вашего проекта</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, idx) => (
              <Card 
                key={idx}
                className={`p-8 bg-card border-2 hover-lift ${
                  plan.highlight 
                    ? 'border-primary shadow-[0_0_40px_rgba(220,38,38,0.3)]' 
                    : 'border-primary/20'
                }`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}
                <h3 className="text-3xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽</span>
                </div>
                <p className="text-center text-muted-foreground mb-8">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full font-bold ${
                    plan.highlight 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-fire-glow">КАЛЬКУЛЯТОР СТОИМОСТИ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Рассчитайте примерную стоимость вашего проекта</p>
          
          <Card className="p-8 bg-card border-primary/20">
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-bold mb-4">
                  Количество страниц: <span className="text-primary">{calculatorData.pages}</span>
                </label>
                <Slider
                  value={[calculatorData.pages]}
                  onValueChange={(value) => setCalculatorData({ ...calculatorData, pages: value[0] })}
                  min={1}
                  max={50}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold mb-4">Дополнительные функции:</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {featureOptions.map((feature) => (
                    <div key={feature.id} className="flex items-center space-x-3 p-3 rounded bg-background/50">
                      <Checkbox
                        id={feature.id}
                        checked={calculatorData.features.includes(feature.id)}
                        onCheckedChange={(checked) => {
                          setCalculatorData({
                            ...calculatorData,
                            features: checked
                              ? [...calculatorData.features, feature.id]
                              : calculatorData.features.filter(f => f !== feature.id)
                          });
                        }}
                      />
                      <label htmlFor={feature.id} className="flex-1 cursor-pointer">
                        <div className="font-medium">{feature.label}</div>
                        <div className="text-sm text-muted-foreground">+{feature.price.toLocaleString()} ₽</div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold mb-4">Уровень дизайна:</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { id: 'standard', label: 'Стандартный', mult: '×1' },
                    { id: 'premium', label: 'Премиум', mult: '×1.5' },
                    { id: 'custom', label: 'Уникальный', mult: '×2' }
                  ].map((design) => (
                    <button
                      key={design.id}
                      onClick={() => setCalculatorData({ ...calculatorData, design: design.id })}
                      className={`p-4 rounded border-2 transition-all ${
                        calculatorData.design === design.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-bold">{design.label}</div>
                      <div className="text-sm text-muted-foreground">{design.mult}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold">Итоговая стоимость:</span>
                  <span className="text-5xl font-bold text-primary text-fire-glow">
                    {calculatePrice().toLocaleString()} ₽
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6">
                  <Icon name="Send" size={24} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-background border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Flame" className="text-primary" size={24} />
              <span className="font-bold">DOOM STUDIOS</span>
            </div>
            <div className="flex gap-6">
              <Icon name="Github" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Doom Studios. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
