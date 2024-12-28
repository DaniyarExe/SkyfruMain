import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    kg: {
      translation: {
        key: "Купуялык саясаты, маалыматтарды иштетүү, кукилерди колдонуу",
        key1: "Брондоо жана башкаруу",
        key2: "Маалымат",
        key3: "Компания жөнүндө",
        key4: "Байланыштар",
        popular: "Популярдуу багыттар",
        block: "Пайдалуу блог",
        news: "Жаңылыктар",
        all: "Бардык",
        allnews: "жаңылыктар",
        accept: "Биз кабыл алабыз",
        about: "Биз жөнүндө",
        aboutText:
          "«Скай ФРУ» ЖЧКсы 2023-жылы түптөлүп, 2024-жылдын март айында №63 оператор сертификатын алган. Авиакомпаниянын учуулары ыңгайлуу Boeing 737-300 учагында аткарылат. «Sky FRU» ЖЧКсынын саясаты ыңгайлуу жана коопсуз учууларды камсыз кылууга багытталган жалпы кызыкчылыктардын жактоочуларынын бирдиктүү командасын түзүүгө багытталган. Sky FRU Airlines - бул, биринчи кезекте, позитивдүү энергияга жана мээримдүү авиацияга толгон адистердин командасы. Квалификациялуу экипаждар жана кесипкөй жер үстүндөгү кызматкерлер күн сайын биздин авиакомпания менен учкан жүргүнчүлөргө кам көрүшөт. Биз жүргүнчүлөрүбүздүн учактарыбызда күн сайын коопсуз жана жайлуу саякатка чыгышын каалайбыз, анткени биздин авиакомпаниянын урааны “ДҮЙНӨНҮ БИЙИКТИКтен ТААНЫШ”.",
        our: "Биздин өнөктөштөр",
        directions: "8 багыт",
        policy: "Жеке маалыматтарды иштетүүгө макулдук",
        policy1: "Положение о конфиденциальности",
        policy1: "Политика использование файлов cookie",

        header: "Брондоо жана башкаруу",
        header1: "Маалымат",
        header2: "Компания жөнүндө",
        header3: "Байланыштар",

        from: "Кайдан",
        from1: "Кайда",
        from2: "Ал жакка",
        from3: "Кайра",
        from4: "Жүргүнчүлөр",
        from5: "Каттам табуу",

        passenger: "жүргүнчү",
        passenger1: "жүргүнчү",
        passenger2: "жүргүнчүлөр",

        passenger3: "Чоңдор",
        passenger4: "Балдар",
        passenger5: "12 жашка чейин",
        passenger6: "Ымыркайлар",
        passenger7: "5 жашка чейин (орунсуз)",

        no: "Жок",

        register: "Каттоо",

        fotr: " Бишкек ш, Шевченко 96",
        fotr1: "Иш убактысы: 9:00дөн 18:00гө чейин",
        fotr2: "Бардык укуктар корголгон © 2024",
        fotr3: "Кыргыз Республикасы",

        declarationMain: "Авиабилет үчүн акча каражаттарын кайтарууга арыз",
        declarationInfo: "Кайтарууга арыздар кезек тартибинде жана компаниянын иш убактысында гана иштелип чыгат: Дүйшөмбү-Жума саат 10:00-17:00. Иштеп чыгуу 3 жумуш күнгө чейин созулушу мүмкүн, арыздарды жөнөтүүдө муну эске алууңузду суранабыз.",
        declarationSideInfo: "Арыз ар бир жүргүнчү тарабынан өзүнчө же төлөм жүргүзүлгөн карта ээси тарабынан толтурулат (бул учурда карта ээси бир нече жүргүнчүнү тизмелей алат).",

        declarationName: "Мен",
        declarationNameInfo: "жүргүнчүнүн же төлөм жүргүзүлгөн картанын ээсинин фамилиясы, аты, атасынын аты",
        declarationPassport: "Пасспорт",
        declarationPassportInfo:"ички паспорт (сериясы, номери)",
        declarationIssued: "Берилген",
        declarationIssuedInfo: "качан, ким тарабынан",
        declarationDeal: "Аба ташуу келишимин бузууну жана аны бузууга байланыштуу акча каражаттарын кайтарып берүүнү суранам. Арыз жөнөтүлгөн күнү мен кайтарып берүүгө болжолдуу сумма менен таанышканымды ырастайм жана орундардан баш тартууну мен тараптан кошумча тастыктоосуз жүргүзүүнү суранам. Эсептөөдө мага айтылган авиакомпания жана Агенттик тарабынан белгиленген кайтаруу үчүн жыйымдарды кайтарылууга тийиш болгон акча каражаттарынын суммасынан кармап калууну өтүнөм.",

        Order: "Заказдын деталдары:",
        OrderInfo: "БРОН маалыматтары:",
        OrderRoute: "Багыт",
        OrderNumber: "Билеттердин №",
        OrderDeparture: "Кетүү күнү",
        OrderDate: "күн. ай. жыл",
        OrderPassagerName: "Жүргүнчүлөрдүн Аты-жөнү",
        OrderPayment: `Акча төлөм кандай жүргүзүлсө, ошол эле ыкма менен кайтарылып берилээрине <strong>көңүлүңүздөрдү бурабыз: банк картасы менен ошол эле банк картасына.</strong>`,
        OrderPhone: "Байланыш телефону:",
        OrderDataInfo: "Датасы",
        OrderComments: "Сиздин комментарийлер:",
        OrderPassportFront: "Паспорттун сүрөтү (алдыңкы бети)",
        OrderPassportBack: "Паспорттун сүрөтү (арткы бети)",

        Office: "Офис",
        SendBtn: "Жиберүү"

      },
    },
    ru: {
      translation: {
        key: "Политика конфиденциальности, обработка данных, использование cookie",
        key1: "Бронирование и управление",
        key2: "Информация",
        key3: "О компании",
        key4: "Контакты",
        popular: "Популярные направления",
        block: "Полезный блог",
        news: "Новости",
        all: "Все",
        allnews: "новости",
        accept: "Мы принимаем",
        about: "О нас",
        aboutText:
          "ОсОО «Скай ФРУ» было образовано в 2023 году, а в марте 2024 года был получен сертификат эксплуатанта № 63. Авиарейсы авиакомпании выполняются на комфортабельном воздушном судне Boeing 737-300. Политика ОсОО «Скай ФРУ» направлена на создание единой команды приверженцев общих интересов ориентированных на предоставление комфортабельных и безопасных полетов. Авиакомпания «Скай ФРУ» — это в первую очередь команда специалистов, полных позитивной энергии и любящих авиацию. Квалифицированные экипажи и профессиональный наземный персонал заботятся о пассажирах, перелетающих нашей авиакомпанией каждый день. Мы хотим, чтобы наши пассажиры путешествовали на наших самолетах безопасно и комфортно каждый день, так как лозунг нашей авиакомпании «ВСТРЕЧАЙ МИР С ВЫСОТЫ».",
        our: "Наши партнёры",
        directions: "8 направлений",
        policy: "Согласие на обработку персональных данных",
        policy1: "Положение о конфиденциальности",
        policy1: "Политика использование файлов cookie",

        header: "Бронирование и управление",
        header1: "Информация",
        header2: "О компании",
        header3: "Контакты",

        from: "Откуда",
        from1: "Куда",
        from2: "Туда",
        from3: "Обратно",
        from4: "Пассажиры",
        from5: "Найти рейсы",

        passenger: "пассажир",
        passenger1: "пассажирa",
        passenger2: "пассажиров",

        passenger3: "Взрослые",
        passenger4: "Дети",
        passenger5: "до 12 лет",
        passenger6: "Младенцы",
        passenger7: "до 5 лет (без места)",

        no: "Нет",

        register: "Регистрация",

        fotr: "Бишкек ул. Шевченко 96",
        fotr1: "График работы с 9:00 до 18:00",
        fotr2: "Все права защищены © 2024",
        fotr3: "Кыргызская Республика г.",

        declarationMain: "Заявление на возврат денежных средств за авиабилет",
        declarationInfo: "Заявления на возврат обрабатываются в порядке очереди и только в рабочие часы компании: пн-пт 10:00-17:00, сб-вс 10:00-17:00. Обработка может занять до 3 рабочих дней, просим Вас учитывать это при отправлении заявлений.",
        declarationSideInfo: "Заявление заполняется каждым пассажиром отдельно либо владельцем карты, с которой производилась оплата (в этом случае владелец карты может перечислить несколько пассажиров).",

        declarationName: "Я",
        declarationNameInfo: "фамилия, имя, отчество пассажира или владельца карты, с которой производилась оплата",
        declarationPassport: "Пасспорт",
        declarationPassportInfo:"внутренний (серия, номер)",
        declarationIssued: "Выдан",
        declarationIssuedInfo: "когда, кем",
        declarationDeal: "Прошу расторгнуть договор воздушной перевозки и вернуть денежные средства в связи с его расторжением. Подтверждаю, что я ознакомлен в день отправки заявления с примерной суммой к возврату и прошу произвести отказ от мест без дополнительного подтверждения с моей стороны. Прошу удержать установленные авиакомпанией и сборы за возврат, озвученные мне при расчете, из суммы денежных средств, подлежащей возврату.",

        Order: "Детали заказа:",
        OrderInfo: "Данные БРОН:",
        OrderRoute: "Маршрут",
        OrderNumber: "№ Билетов",
        OrderDeparture: "Дата вылета",
        OrderDate: "дд, мм, гггг",
        OrderPassagerName: "ФИО пассажиров",
        OrderPayment: "<strong>Обращаем ваше внимание,</strong> что деньги будут возвращены тем же способом, каким была произведена оплата: <strong>банковской картой на ту же банковскую карту.</strong>",
        OrderPhone: "Контактный телефон:",
        OrderDataInfo: "Дата",
        OrderComments: "Ваши комментарии:",
        OrderPassportFront: "Фото паспорта (передняя сторона)",
        OrderPassportBack: "Фото паспорта (задняя сторона)",

        Office: "Офис",
        SendBtn: "Отправить"
      },
    },
    en: {
      translation: {
        key: "Privacy policy, data processing, use of cookies",
        key1: "Reservations and management",
        key2: "Information",
        key3: "About the company",
        key4: "Contacts",
        popular: "Popular destinations",
        block: "Useful blog",
        news: "News",
        all: "All",
        allnews: "news",
        accept: "We accept ",
        about: "About us",
        aboutText:
          "Sky FRU LLP was established in 2023, and in March 2024 it received Operator's Certificate No. 63. The airline's flights are operated by comfortable Boeing 737-300 aircraft. The policy of Sky FRU Ltd. is aimed at creating a united team of adherents of common interests focused on providing comfortable and safe flights. Sky FRU Airlines is first of all a team of specialists full of positive energy and loving aviation. Qualified crews and professional ground staff take care of the passengers who fly with our airline every day. We want our passengers to travel safely and comfortably on our airplanes every day, as our airline's slogan is See the World from the Heights.",
        our: "Our partners",
        directions: "8 directions",
        policy: "Consent to processing of personal data",
        policy1: "Confidentiality clause",
        policy1: "Cookie Policy",

        header: "Booking and Management",
        header1: "Information",
        header2: "About Company",
        header3: "Contacts",

        from: "From",
        from1: "To",
        from2: "There",
        from3: "Return",
        from4: "Passengers",
        from5: "Find flights",

        passenger: "passenger",
        passenger1: "passengers",
        passenger2: "passengers",

        passenger3: "Adults",
        passenger4: "Children",
        passenger5: "Up to 12 years old",
        passenger6: "Infants",
        passenger7: "Up to 5 years old (without seat)",

        no: "No",

        register: "Register",

        fotr: "Bishkek, Shevchenko 96",
        fotr1: "Working hours: 9:00 AM to 6:00 PM",
        fotr2: "All rights reserved © 2024",
        fotr3: "Kyrgyz Republic c.",

        declarationMain: "Application for refund for the ticket",
        declarationInfo: "Refund applications are processed on a first-come, first-served basis and only during the company's working hours: Mon-Fri 10:00-17:00. Processing may take up to 3 business days, please take this into account when sending applications.",
        declarationSideInfo: "The application is filled out by each passenger separately or by the owner of the card from which the payment was made (in this case, the cardholder can list several passengers).",

        declarationName: "I am ",
        declarationNameInfo: "the last name, first name, fathers name of the passenger or the cardholder with whom the payment was made",
        declarationPassport: "Passport",
        declarationPassportInfo: "internal passport (series, number)",
        declarationIssued: "Issued",
        declarationIssuedInfo: "when, by whom",
        declarationDeal: "I ask you to terminate the air transportation contract and return the funds in connection with its termination. I confirm that I have read the approximate amount to be refunded on the day of sending the application and ask you to cancel the seats without additional confirmation from my side. I ask you to deduct the refund fees set by the airline and the agency, announced to me during the calculation, from the amount of money to be refunded.",

        Order: "Order Details:",
        OrderInfo: "BRON Data:",
        OrderRoute: "Route",
        OrderNumber: "Ticket Number",
        OrderDeparture: "Departure date",
        OrderDate: "dd.mm.yyyy",
        OrderPassagerName: "Full name of passengers",
        OrderPayment: "<strong>Please note</strong> that the money will be refunded in the same way as the payment was made: <strong>by bank card to the same bank card.<strong/>",
        OrderPhone: "Contact phone number:",
        OrderDataInfo: "Date",
        OrderComments: "Your comments:",
        OrderPassportFront: "Passport photo (front side)",
        OrderPassportBack: "Passport photo (reverse side)",

        Office: "Office",
        SendBtn: "Send"

      },
    },
  },
  lng: savedLang,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;