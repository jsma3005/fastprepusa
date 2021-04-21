import { AiOutlineSafety } from 'react-icons/ai';
import { MdSecurity } from 'react-icons/md';
import { FaRegThumbsUp } from 'react-icons/fa'

export const ruLangData = {
    navbar: {
        about: 'О нас',
        services: 'Услуги',
        prices: 'Цены',
        map: 'Склад на карте',
        contacts: 'Контакты'
    },
    header: {
        texts: [
            "Надежный",
            "Быстрый",
            "Качественный",
        ],
        title: 'Преп центр',
        subTitle: 'в США'
    },
    feautures: {
        title: 'Почему выбирают нас?',
        feauturesList: [
            {
                id: 1,
                icon: <AiOutlineSafety />,
                title: 'С нами выгодно',
                description: 'Снижаем процент возвратов, риски получения брака от поставщика и закрытия листинга или аккаунта продавца. Честные тарифы, прозрачное ценообразование, прогрессивная система скидок, бонусы для новых клиентов.'
            },
            {
                id: 2,
                icon: <MdSecurity />,
                title: 'С нами надежно',
                description: 'Многоуровневая система безопасности склада, страхование всех товаров и тщательная проверка персонала. Ваш товар – в надежных руках!'
            },
            {
                id: 3,
                icon: <FaRegThumbsUp />,
                title: 'С нами легко',
                description: 'Человеческое отношение и профессиональный подход. Отзывчивая и доброжелательная русскоязычная поддержка реагирует на все обращения в течение суток/х часов.'
            }
        ]
    },
    services: {
        title: 'ЧТО МЫ ПРЕДЛАГАЕМ ВАМ',
        subTitle: 'НАШИ УСЛУГИ',
    },
    pricing: {
        title: 'Тарифы по лучшим ценам',
        subTitle: 'Наши цены',
        link: 'Скачать прайс лист',
        titleText: 'Мы сделали все для того, чтобы наши цены были максимально демократичны и прозрачны. Никаких скрытых платежей!'
    },
    social: {
        title: 'Напишите нам',
        subTitle: 'Связь с нами',
        titleText: 'Будем рады дать подробную консультацию и обсудить все детали. Напишите нам!'
    },
    partners: {
        title: 'Мы поддерживаем',
        subTitle: 'Оплата',
        titleText: 'Работаем со всеми основными платежными системами, принимаем кредитные и дебетовые карты американских и европейских банков, оформляем переводы с карты на карту.'
    },
    map: {
        title: 'Где мы находимся',
        subTitle: 'Склад на карте',
        titleText: 'Нас легко найти. Мы всего в 40 минутах от склада Amazon.'
    },
    contacts: {
        address: 'Адрес',
        number: 'Номер телефона',
        email: 'Электронная почта',
        timeTitle: 'Время работы',
        time: 'ПН-ПТ: 8:00AM - 6:00PM',
        nav: 'Навигация по сайту',
        navData: [
            {
                id: 1,
                title: 'Главная',
                link: '/#navigation',
            },
            {
                id: 2,
                title: 'О нас',
                link: '/about/#navigation'
            },
            {
                id: 3,
                title: 'Услуги',
                link: '/#services'
            },
            {
                id: 4,
                title: 'Цены',
                link: '/#prices'
            },
            {
                id: 5,
                title: 'Склад на карте',
                link: '/#map'
            }
        ],
        social: 'Социальные сети'
    },
    about: {
        title: 'КТО МЫ',
        subTitle: 'О нас',
        we: 'МЫ',
        ourMission: 'Наша миссия',
        ourGoal: 'Наша цель',
        text1: 'Помогаем продавцам из России и стран СНГ легко и комфортно работать на Amazon, Ebay, Etsy и других торговых площадках США.',
        text2: 'Все, что нужно для успешной торговли в США: продавайте и зарабатывайте еще больше, а всю обработку товаров мы возьмем на себя!',
        text3: 'Мы всегда рады новым клиентам и делаем все, чтобы они стали постоянными!',
        statisticList: {
            title: 'Помогаем расти и масштабироваться:',
            list1: '+44% - Среднемесячное повышение объемов продаж.',
            list2: '+35% - Среднее увеличение частоты заказов.',
            list3: '+12% - Средняя оптимизация расходов на доставку заказов. *',
            by: '* По данным постоянных партнеров Fast Prep USA'
        }
    }
}

export const enLangData = {
    navbar: {
        about: 'About',
        services: 'Services',
        prices: 'Prices',
        map: 'Warehouse on the map',
        contacts: 'Contacts'
    },
    header: {
        texts: [
            "Reliable",
            "Fast",
            "Qualitative",
        ],
        title: 'Prep center',
        subTitle: 'in USA'
    },
    feautures: {
        title: 'Why choose us?',
        feauturesList: [
            {
                id: 1,
                icon: <AiOutlineSafety />,
                title: 'Profitable',
                description: "We reduce the percentage of returns, the risks of getting a marriage from a supplier and closing a listing or seller's account. Fair rates, transparent pricing, progressive system of discounts, bonuses for new customers."
            },
            {
                id: 2,
                icon: <MdSecurity />,
                title: 'Reliable',
                description: 'Multilevel warehouse security system, insurance of all goods and a thorough check of personnel. Your product is in good hands!'
            },
            {
                id: 3,
                icon: <FaRegThumbsUp />,
                title: 'Easy',
                description: 'Human attitude and professional approach. Responsive and friendly Russian-speaking support responds to all calls within 24 hours.'
            }
        ]
    },
    services: {
        title: 'WHAT WE OFFER YOU',
        subTitle: 'OUR SERVICES',
    },
    pricing: {
        title: 'Tariffs at the best prices',
        subTitle: 'Our pricing',
        link: 'Download price list',
        titleText: 'We have done everything to ensure that our prices are as democratic and transparent as possible. No hidden fees!'
    },
    social: {
        title: 'Write to us',
        subTitle: 'Contacts us',
        titleText: 'We will be happy to provide detailed advice and discuss all the details. Write to us!'
    },
    partners: {
        title: 'We support',
        subTitle: 'Payment',
        titleText: 'We work with all major payment systems, accept credit and debit cards from American and European banks, and arrange card-to-card transfers.'
    },
    map: {
        title: 'Where we are',
        subTitle: 'Warehouse on the map',
        titleText: 'We are easy to find. We are just 40 minutes from the Amazon warehouse.'
    },
    contacts: {
        address: 'Address',
        number: 'Number phone',
        email: 'Email',
        timeTitle: 'Working hours',
        time: 'MON-FRI: 8:00AM - 6:00PM',
        nav: 'Site navigation',
        navData: [
            {
                id: 1,
                title: 'Main',
                link: '/#navigation',
            },
            {
                id: 2,
                title: 'About',
                link: '/about/#navigation'
            },
            {
                id: 3,
                title: 'Services',
                link: '/#services'
            },
            {
                id: 4,
                title: 'Prices',
                link: '/#prices'
            },
            {
                id: 5,
                title: 'Warehouse on the map',
                link: '/#map'
            }
        ],
        social: 'Social networks'
    },
    about: {
        title: 'WHO WE ARE',
        subTitle: 'About',
        we: 'WE',
        ourMission: 'Our mission',
        ourGoal: 'Our goal',
        text1: 'Help sellers from Russia and the CIS countries to work easily and comfortably on Amazon, Ebay, Etsy and other US trading platforms.',
        text2: 'Everything you need to trade successfully in the USA: sell and earn even more, and we will take care of all the processing of goods!',
        text3: 'We are always glad to new clients and do our best to make them permanent!',
        statisticList: {
            title: 'We help you grow and scale: ',
            list1: '+44% - Average monthly increase in sales.',
            list2: '+35% - Average increase in the frequency of orders.',
            list3: '+12% - Average optimization of order delivery costs. *',
            by: '* According to regular partners of Fast Prep USA'
        }
    }
}