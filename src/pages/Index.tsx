import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type PageType = 'home' | 'about' | 'management' | 'news';

const Index = () => {
  const [activePage, setActivePage] = useState<PageType>('home');

  const navigation = [
    { id: 'home' as PageType, label: 'Главная' },
    { id: 'about' as PageType, label: 'О корпорации' },
    { id: 'news' as PageType, label: 'Новости' },
    { id: 'management' as PageType, label: 'Руководство' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-primary/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Crown" className="text-black" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">KINGSMANS</h1>
                <p className="text-xs text-gray-400">Los Santos</p>
              </div>
            </div>
            <div className="hidden md:flex gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activePage === item.id ? 'default' : 'ghost'}
                  onClick={() => setActivePage(item.id)}
                  className={
                    activePage === item.id
                      ? 'bg-primary text-black hover:bg-primary/90'
                      : 'text-gray-300 hover:text-primary hover:bg-transparent'
                  }
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'management' && <ManagementPage />}
        {activePage === 'news' && <NewsPage />}
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-primary/20 p-2">
        <div className="grid grid-cols-4 gap-1">
          {navigation.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => setActivePage(item.id)}
              className={
                activePage === item.id
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-primary'
              }
              size="sm"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ setActivePage }: { setActivePage: (page: PageType) => void }) => {
  return (
    <div className="relative">
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/4ce36c02-024e-4dd4-87e6-3cc16171684c.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">
            KINGSMANS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
            Элитная корпорация премиального уровня в сердце Лос-Сантоса
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => setActivePage('about')}
              className="bg-primary text-black hover:bg-primary/90 px-8 py-6 text-lg"
            >
              О корпорации
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => setActivePage('news')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Последние новости
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Icon name="ChevronDown" className="text-primary animate-bounce" size={32} />
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-400">
              Kingsmans — это синоним успеха и профессионализма в деловом мире Лос-Сантоса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Trophy', title: 'Лидерство', desc: 'Мы занимаем ведущие позиции в бизнесе Лос-Сантоса' },
              { icon: 'Shield', title: 'Надёжность', desc: 'Проверенная репутация и стабильность с 2015 года' },
              { icon: 'Users', title: 'Команда', desc: 'Профессионалы с многолетним опытом работы' },
              { icon: 'TrendingUp', title: 'Развитие', desc: 'Постоянный рост и инновационные решения' },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-black" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/b9974db3-5105-42bf-9dd0-40b917e32507.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            О корпорации
          </h1>
          <p className="text-xl text-gray-300">
            История успеха и профессионализма
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: 'Users', value: '200+', label: 'Сотрудников' },
            { icon: 'Building', value: '15', label: 'Филиалов' },
            { icon: 'Award', value: '50+', label: 'Наград' },
            { icon: 'Globe', value: '24/7', label: 'Работаем' },
          ].map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-primary/30">
              <CardContent className="p-8 text-center">
                <Icon name={stat.icon} className="text-primary mx-auto mb-4" size={40} />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">История Kingsmans</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Kingsmans была основана в 2015 году группой амбициозных предпринимателей, которые видели огромный потенциал в развивающейся экономике Лос-Сантоса. С первого дня наша цель была ясна — создать корпорацию мирового уровня, которая станет эталоном качества и профессионализма.
            </p>
            <p>
              За годы работы мы выросли из небольшого стартапа в одну из крупнейших и наиболее уважаемых корпораций города. Наш успех основан на трёх китах: инновационном подходе к бизнесу, безупречной репутации и команде высококвалифицированных специалистов.
            </p>
            <p>
              Сегодня Kingsmans — это не просто бизнес, это сообщество профессионалов, объединённых общей целью: создавать ценность для наших клиентов и партнёров и вносить вклад в развитие экономики Лос-Сантоса.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'Target',
              title: 'Наша миссия',
              desc: 'Создавать ценность для клиентов и партнёров через инновационные решения и безупречный сервис',
            },
            {
              icon: 'Eye',
              title: 'Наше видение',
              desc: 'Стать ведущей корпорацией Лос-Сантоса, устанавливающей стандарты качества и профессионализма',
            },
            {
              icon: 'Star',
              title: 'Наши ценности',
              desc: 'Честность, профессионализм, инновации и ответственность перед нашими клиентами и обществом',
            },
          ].map((item, index) => (
            <Card key={index} className="bg-gray-800/30 border-primary/30">
              <CardContent className="p-8">
                <Icon name={item.icon} className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsPage = () => {
  const news = [
    {
      date: '15 октября 2024',
      category: 'Развитие',
      title: 'Kingsmans открывает новый офис в центре Лос-Сантоса',
      description: 'Мы рады сообщить об открытии нашего нового офиса площадью 5000 кв.м в самом престижном районе города.',
      image: 'https://cdn.poehali.dev/files/59968eb4-f507-4a3a-9479-8bcaae9f482c.png',
    },
    {
      date: '10 октября 2024',
      category: 'Финансы',
      title: 'Годовой отчёт: рост выручки на 45%',
      description: 'Корпорация демонстрирует уверенный рост финансовых показателей по итогам года.',
      image: null,
    },
    {
      date: '5 октября 2024',
      category: 'Партнёрство',
      title: 'Новое партнёрство с международными инвесторами',
      description: 'Kingsmans подписала соглашение о стратегическом партнёрстве с ведущими мировыми инвесторами.',
      image: null,
    },
    {
      date: '1 октября 2024',
      category: 'Общество',
      title: 'Корпоративная социальная ответственность',
      description: 'Запущена новая программа поддержки молодых предпринимателей Лос-Сантоса.',
      image: null,
    },
    {
      date: '28 сентября 2024',
      category: 'Награды',
      title: 'Награда "Лучший работодатель года"',
      description: 'Kingsmans получила престижную награду за создание лучших условий для сотрудников.',
      image: null,
    },
    {
      date: '23 сентября 2024',
      category: 'Инновации',
      title: 'Внедрение новых технологий',
      description: 'Корпорация инвестирует в передовые технологии для повышения эффективности бизнеса.',
      image: null,
    },
  ];

  const categoryColors: Record<string, string> = {
    'Развитие': 'bg-primary text-black',
    'Финансы': 'bg-green-600 text-white',
    'Партнёрство': 'bg-blue-600 text-white',
    'Общество': 'bg-purple-600 text-white',
    'Награды': 'bg-yellow-600 text-black',
    'Инновации': 'bg-cyan-600 text-white',
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Newspaper" className="text-primary" size={40} />
            <h1 className="text-5xl font-bold text-primary">Новости</h1>
          </div>
          <p className="text-xl text-gray-400">
            Актуальные события и достижения Kingsmans
          </p>
        </div>

        <div className="space-y-6">
          {news.map((item, index) => (
            <Card
              key={index}
              className={`${
                index === 0 && item.image
                  ? 'bg-gray-800/50 border-primary/30 overflow-hidden'
                  : 'bg-gray-800/30 border-gray-700'
              } hover:border-primary/50 transition-all`}
            >
              {index === 0 && item.image ? (
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className="h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <CardContent className="p-8">
                    <div className={`inline-block px-3 py-1 rounded text-sm font-semibold mb-4 ${categoryColors[item.category]}`}>
                      {item.category}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Icon name="Calendar" size={16} />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-gray-300 text-lg">{item.description}</p>
                  </CardContent>
                </div>
              ) : (
                <CardContent className="p-6">
                  <div className={`inline-block px-3 py-1 rounded text-sm font-semibold mb-3 ${categoryColors[item.category]}`}>
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ManagementPage = () => {
  const management = [
    {
      name: 'Александр Королёв',
      position: 'Генеральный директор',
      description: 'Основатель и идейный вдохновитель Kingsmans. Более 15 лет опыта в бизнесе Лос-Сантоса.',
      icon: 'Crown',
    },
    {
      name: 'Виктория Соколова',
      position: 'Финансовый директор',
      description: 'Отвечает за финансовую стратегию и устойчивый рост корпорации.',
      icon: 'TrendingUp',
    },
    {
      name: 'Михаил Волков',
      position: 'Директор по развитию',
      description: 'Курирует новые проекты и расширение бизнеса на новые рынки.',
      icon: 'Rocket',
    },
    {
      name: 'Елена Павлова',
      position: 'HR-директор',
      description: 'Создаёт лучшие условия для развития талантов в корпорации.',
      icon: 'Users',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">Руководство</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Команда опытных профессионалов, которая ведёт Kingsmans к успеху
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {management.map((person, index) => (
            <Card key={index} className="bg-gray-800/30 border-primary/30 hover:border-primary/60 transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={person.icon} className="text-black" size={36} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>
                    <p className="text-primary font-semibold mb-4">{person.position}</p>
                    <p className="text-gray-400">{person.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
