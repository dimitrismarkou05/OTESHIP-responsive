import school1Image from "../../assets/schools/greece.png";
import school2Image from "../../assets/schools/poland.jpg";
import school3Image from "../../assets/schools/turkey.jpg";

const schoolCardsData = {
  en: [
    {
      to: "https://blogs.sch.gr/eeeekkas",
      image: school1Image,
      title: "School of Special Vocational Education of Argos Orestiko",
      description:
        "Innovative vocational education institution in Argos Orestiko specialising in inclusive skill-development and career preparation for youth with diverse needs",
      country: "Greece",
      location: "https://maps.app.goo.gl/3wDsg5rem5zwHAzB9",
    },
    {
      to: "https://soswdnr.pl/",
      image: school2Image,
      title:
        "SPECJALNY OŚRODEK SZKOLNO WYCHOWAWCZY NR 1 DLA DZIECI NIEPEŁNOSPRAWNYCH RUCHOWO W POLICACH",
      description:
        "Specialist educational and rehabilitation centre in the town of Police, Poland, supporting students with physical disabilities through inclusive learning and therapy",
      country: "Poland",
      location: "https://maps.app.goo.gl/JjLqU7rBxHrnZTP87",
    },
    {
      to: "https://manisaisuygulamamerkezi.meb.k12.tr/",
      image: school3Image,
      title: "MANISA OZEL EGITIM UYGULAMA OKULU III. KADEME",
      description:
        "Dedicated special education institution in Manisa fostering life skills, social development, and vocational training for students with diverse learning needs",
      country: "Turkey",
      location: "https://maps.app.goo.gl/ik3mDARbU5CJn3F49",
    },
  ],

  ελ: [
    {
      to: "https://blogs.sch.gr/eeeekkas",
      image: school1Image,
      title: "Σχολή Ειδικής Επαγγελματικής Εκπαίδευσης Άργους Ορεστικού",
      description:
        "Καινοτόμο επαγγελματικό εκπαιδευτικό ίδρυμα στο Άργος Ορεστικό που ειδικεύεται στην inclusive ανάπτυξη δεξιοτήτων και προετοιμασία καριέρας για νέους με διαφορετικές ανάγκες",
      country: "Ελλάδα",
      location: "https://maps.google.com/",
    },
    {
      to: "https://soswdnr.pl/",
      image: school2Image,
      title:
        "SPECJALNY OŚRODEK SZKOLNO WYCHOWAWCZY NR 1 DLA DZIECI NIEPEΛΝΟΣΠΑΡΑΒΛΗΚΩΝ RUCHOWO W POLICACH",
      description:
        "Εξειδικευμένο εκπαιδευτικό και αποκαταστατικό κέντρο στην πόλη Police της Πολωνίας, που υποστηρίζει μαθητές με σωματικές αναπηρίες μέσω συμπεριληπτικής μάθησης και θεραπείας",
      country: "Πολωνία",
      location: "https://maps.google.com/",
    },
    {
      to: "https://manisaisuygulamamerkezi.meb.k12.tr/",
      image: school3Image,
      title: "MANISA OZEL EGITIM UYGULAMA OKULU III. KADEME",
      description:
        "Αφοσιωμένο ίδρυμα ειδικής αγωγής στη Manisa που προωθεί δεξιότητες ζωής, κοινωνική ανάπτυξη και επαγγελματική κατάρτιση για μαθητές με διαφορετικές μαθησιακές ανάγκες",
      country: "Τουρκία",
      location: "https://maps.google.com/",
    },
  ],

  pl: [
    {
      to: "https://blogs.sch.gr/eeeekkas",
      image: school1Image,
      title: "Szkoła Specjalnej Edukacji Zawodowej w Argos Orestiko",
      description:
        "Innowacyjna placówka kształcenia zawodowego w Argos Orestiko, specjalizująca się w inkluzywnym rozwoju umiejętności i przygotowaniu do kariery dla młodzieży o różnych potrzebach",
      country: "Grecja",
      location: "https://maps.google.com/",
    },
    {
      to: "https://soswdnr.pl/",
      image: school2Image,
      title:
        "Specjalny Ośrodek Szkolno-Wychowawczy nr 1 dla Dzieci Niepełnosprawnych Ruchowo w Policach",
      description:
        "Specjalistyczny ośrodek edukacyjny i rehabilitacyjny w Policach, Polska, wspierający uczniów z niepełnosprawnościami ruchowymi poprzez inkluzywną naukę i terapię",
      country: "Polska",
      location: "https://maps.google.com/",
    },
    {
      to: "https://manisaisuygulamamerkezi.meb.k12.tr/",
      image: school3Image,
      title: "MANISA ÖZEL EĞİTİM UYGULAMA OKULU III. KADEME",
      description:
        "Dedykowana placówka edukacji specjalnej w Manisie, wspierająca rozwój umiejętności życiowych, rozwój społeczny i szkolenie zawodowe dla uczniów o różnych potrzebach edukacyjnych",
      country: "Turcja",
      location: "https://maps.google.com/",
    },
  ],

  tr: [
    {
      to: "https://blogs.sch.gr/eeeekkas",
      image: school1Image,
      title: "Argos Orestiko Özel Mesleki Eğitim Okulu",
      description:
        "Argos Orestiko’daki yenilikçi mesleki eğitim kurumu, çeşitli ihtiyaçları olan gençler için kapsayıcı beceri geliştirme ve kariyer hazırlığı sunmaktadır",
      country: "Yunanistan",
      location: "https://maps.google.com/",
    },
    {
      to: "https://soswdnr.pl/",
      image: school2Image,
      title:
        "Police 1 No’lu Bedensel Engelliler Özel Eğitim ve Rehabilitasyon Merkezi",
      description:
        "Polonya'nın Police kentinde, fiziksel engelli öğrencileri kapsayıcı öğrenme ve terapi yoluyla destekleyen uzman eğitim ve rehabilitasyon merkezi",
      country: "Polonya",
      location: "https://maps.google.com/",
    },
    {
      to: "https://manisaisuygulamamerkezi.meb.k12.tr/",
      image: school3Image,
      title: "MANISA ÖZEL EĞİTİM UYGULAMA OKULU III. KADEME",
      description:
        "Manisa’da çeşitli öğrenme ihtiyaçlarına sahip öğrenciler için yaşam becerileri, sosyal gelişim ve mesleki eğitim sağlayan özel eğitim kurumu",
      country: "Türkiye",
      location: "https://maps.google.com/",
    },
  ],
};

export default schoolCardsData;
