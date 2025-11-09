import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

type PageType = 'home' | 'about' | 'management' | 'news';

const Index = () => {
  const [activePage, setActivePage] = useState<PageType>('home');

  const navigation = [
    { id: 'home' as PageType, label: 'Главная', icon: 'Home' },
    { id: 'about' as PageType, label: 'О корпорации', icon: 'Building2' },
    { id: 'management' as PageType, label: 'Руководство', icon: 'Users' },
    { id: 'news' as PageType, label: 'Новости', icon: 'Newspaper' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-orange-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/577509af-bfcf-4216-994a-f0c69c6ee08a.png" 
                alt="Kingsman Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kingsmans
              </h1>
            </div>
            <div className="hidden md:flex gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activePage === item.id ? 'default' : 'ghost'}
                  onClick={() => setActivePage(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'management' && <ManagementPage />}
        {activePage === 'news' && <NewsPage />}
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
        <div className="grid grid-cols-4 gap-1">
          {navigation.map((item) => (
            <Button
              key={item.id}
              variant={activePage === item.id ? 'default' : 'ghost'}
              onClick={() => setActivePage(item.id)}
              className="flex flex-col gap-1 h-auto py-2"
              size="sm"
            >
              <Icon name={item.icon} size={20} />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ setActivePage }: { setActivePage: (page: PageType) => void }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-block mb-6">
          <img 
            src="https://cdn.poehali.dev/files/577509af-bfcf-4216-994a-f0c69c6ee08a.png" 
            alt="Kingsman Logo" 
            className="w-32 h-32 rounded-full object-cover shadow-2xl"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Kingsmans
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Ведущая корпорация в мире GTA 5 RP. Стремление к совершенству, честность в бизнесе, успех в каждом начинании.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="gap-2" onClick={() => setActivePage('about')}>
            <Icon name="ArrowRight" size={20} />
            Узнать больше
          </Button>
          <Button size="lg" variant="outline" className="gap-2" onClick={() => setActivePage('rules')}>
            <Icon name="FileText" size={20} />
            Правила корпорации
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card className="animate-fade-up border-2 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActivePage('about')}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
              <Icon name="Target" className="text-white" size={24} />
            </div>
            <CardTitle>Наша миссия</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Создавать лучшие условия для развития бизнеса и обеспечивать стабильность нашим партнерам и сотрудникам.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-up border-2 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActivePage('management')}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
              <Icon name="Users" className="text-white" size={24} />
            </div>
            <CardTitle>Руководство</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Опытная команда профессионалов, которая ведет корпорацию к новым высотам в мире бизнеса.
            </p>
          </CardContent>
        </Card>

        <Card className="animate-fade-up border-2 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActivePage('code')}>
          <CardHeader>
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <CardTitle>Наши ценности</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Честность, профессионализм и стремление к совершенству — основа нашей корпоративной культуры.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0">
        <CardContent className="p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Присоединяйтесь к элите</h2>
          <p className="text-lg mb-6 opacity-90">
            Откройте новые возможности для карьерного роста и бизнес-развития
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            <Icon name="UserPlus" size={20} />
            Стать частью команды
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 animate-fade-in">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        О корпорации
      </h1>
      <Card className="mb-8">
        <CardContent className="p-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Kingsmans — это ведущая организация в мире GTA 5 RP, которая специализируется на создании и развитии успешного бизнеса. 
            Мы объединяем талантливых и амбициозных людей, готовых работать на результат и достигать поставленных целей.
          </p>
          <Separator className="my-6" />
          <h3 className="text-2xl font-bold mb-4">История создания</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Основанная группой предпринимателей, наша корпорация быстро заняла лидирующие позиции на рынке. 
            Благодаря четкой стратегии, профессионализму команды и инновационному подходу к бизнесу, мы стали эталоном качества и надежности.
          </p>
          <Separator className="my-6" />
          <h3 className="text-2xl font-bold mb-4">Наши направления</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Инвестиции</h4>
                <p className="text-sm text-gray-600">Управление активами и инвестиционные проекты</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Building" className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Недвижимость</h4>
                <p className="text-sm text-gray-600">Покупка, продажа и управление объектами</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Car" className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Транспорт</h4>
                <p className="text-sm text-gray-600">Логистика и автомобильный бизнес</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Briefcase" className="text-secondary" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Консалтинг</h4>
                <p className="text-sm text-gray-600">Бизнес-консультации и стратегическое планирование</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ManagementPage = () => {
  const management = [
    {
      name: 'Александр Романов',
      position: 'Генеральный директор',
      description: 'Опыт управления крупными корпорациями более 10 лет',
      icon: 'Crown',
    },
    {
      name: 'Виктория Петрова',
      position: 'Финансовый директор',
      description: 'Эксперт в области финансового планирования и инвестиций',
      icon: 'DollarSign',
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Директор по развитию',
      description: 'Отвечает за стратегическое развитие и новые проекты',
      icon: 'Rocket',
    },
    {
      name: 'Елена Волкова',
      position: 'Директор по персоналу',
      description: 'Формирует команду профессионалов высочайшего уровня',
      icon: 'UserCheck',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 animate-fade-in">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Руководство корпорации
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Команда опытных профессионалов, которая ведет Kingsmans к успеху
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {management.map((person, index) => (
          <Card key={index} className="hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={person.icon} className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{person.position}</p>
                  <p className="text-sm text-gray-600">{person.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const NewsPage = () => {
  const news = [
    {
      date: '15 марта 2024',
      title: 'Открытие нового офиса в центре города',
      description: 'Kingsmans расширяет свое присутствие, открывая представительство в деловом центре. Новый офис оборудован по последнему слову техники.',
      icon: 'Building',
    },
    {
      date: '10 марта 2024',
      title: 'Заключен крупный контракт на $5M',
      description: 'Подписано стратегическое соглашение с международными партнерами. Это открывает новые возможности для развития бизнеса.',
      icon: 'Handshake',
    },
    {
      date: '5 марта 2024',
      title: 'Набор новых сотрудников',
      description: 'Стартовала программа по привлечению талантов. Мы ищем амбициозных специалистов для пополнения нашей команды.',
      icon: 'Users',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 animate-fade-in">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Новости корпорации
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Последние события и достижения Kingsmans
      </p>
      <div className="space-y-6">
        {news.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const RulesPage = () => {
  const rules = [
    {
      title: 'Дисциплина и пунктуальность',
      items: [
        'Все сотрудники обязаны соблюдать рабочий график',
        'Опоздания и прогулы недопустимы без уважительной причины',
        'О невозможности выхода на работу необходимо сообщать заранее',
      ],
    },
    {
      title: 'Субординация и иерархия',
      items: [
        'Соблюдайте корпоративную иерархию в общении',
        'Все решения принимаются руководством',
        'При возникновении вопросов обращайтесь к непосредственному руководителю',
      ],
    },
    {
      title: 'Конфиденциальность',
      items: [
        'Вся информация о деятельности корпорации является конфиденциальной',
        'Запрещено разглашать коммерческую тайну третьим лицам',
        'Внутренние документы не подлежат распространению',
      ],
    },
    {
      title: 'Дресс-код',
      items: [
        'На работе необходимо соблюдать деловой стиль одежды',
        'Внешний вид должен соответствовать статусу корпорации',
        'Исключения возможны только с разрешения руководства',
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 animate-fade-in">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Внутренние правила
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Обязательные требования для всех сотрудников Kingsmans
      </p>
      <div className="space-y-6">
        {rules.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                </div>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 items-start">
                    <Icon name="ChevronRight" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const CodePage = () => {
  const codeItems = [
    {
      title: 'Честность и прозрачность',
      description: 'Мы строим наш бизнес на принципах открытости и честности. Все наши действия должны быть прозрачными и соответствовать закону.',
      icon: 'Eye',
    },
    {
      title: 'Профессионализм',
      description: 'Каждый сотрудник должен постоянно развиваться и повышать свою квалификацию. Качество работы — наш главный приоритет.',
      icon: 'Award',
    },
    {
      title: 'Уважение к коллегам',
      description: 'Мы ценим каждого члена команды и строим отношения на основе взаимного уважения и доверия.',
      icon: 'Heart',
    },
    {
      title: 'Ответственность',
      description: 'Каждый несет ответственность за свои действия и решения. Мы не перекладываем вину на других.',
      icon: 'Shield',
    },
    {
      title: 'Командная работа',
      description: 'Успех корпорации зависит от слаженной работы всей команды. Мы поддерживаем друг друга и работаем на общий результат.',
      icon: 'Users',
    },
    {
      title: 'Стремление к совершенству',
      description: 'Мы не останавливаемся на достигнутом и постоянно ищем способы улучшить наши процессы и результаты.',
      icon: 'TrendingUp',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 animate-fade-in">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Кодекс корпорации
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Основные ценности и принципы Kingsmans
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {codeItems.map((item, index) => (
          <Card key={index} className="hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-4">
                <Icon name={item.icon} className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;