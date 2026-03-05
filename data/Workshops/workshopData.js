import image1 from "../../assets/banners/workshop-banner1.webp";
import image2 from "../../assets/banners/workshop-banner2.webp";
import image3 from "../../assets/banners/workshop-banner3.webp";

const workshopData = {
  en: [
    {
      image: image1,
      title: "Tactile Discovery & Raw Materials",
      description:
        "The first workshop focused on the sensory experience of clay. Students explored different textures, temperatures, and consistencies of raw earth materials. This foundational phase allowed participants to communicate through touch, bypassing language barriers.",
      outcomes: [
        "Improved sensory integration and fine motor skills",
        "Non-verbal communication establishment between student groups",
      ],
    },
    {
      image: image2,
      title: "Building Bridges: Co-Creation",
      description:
        "In the second phase, students worked in mixed-nationality pairs to construct larger vessels using coil and slab techniques. This required negotiation, patience, and shared decision-making, fostering deep interpersonal connections.",
      outcomes: [
        "Development of collaborative problem-solving strategies",
        "Creation of unique large-scale collaborative vessels",
      ],
    },
    {
      image: image3,
      title: "Glazing & Cultural Motifs",
      description:
        "The final workshop explored surface decoration. Students shared traditional patterns from their home countries—Polish folk motifs inspired by Łowicz floral designs and paper cut-art (wycinanki), Turkish İznik tile patterns and Ottoman geometric motifs, and Greek geometric designs—combining them into new, hybrid visual narratives.",
      outcomes: [
        "Cross-cultural appreciation and artistic exchange",
        "Mastery of underglaze techniques",
      ],
    },
  ],

  ελ: [
    {
      image: image1,
      title: "Αφή & Πρώτες Ύλες",
      description:
        "Το πρώτο εργαστήριο επικεντρώθηκε στην αισθητηριακή εμπειρία του πηλού. Οι μαθητές εξερεύνησαν διαφορετικές υφές, θερμοκρασίες και συνέπειες πρώτων υλικών γης. Αυτή η βασική φάση επέτρεψε την επικοινωνία μέσω της αφής, παρακάμπτοντας γλωσσικά εμπόδια.",
      outcomes: [
        "Βελτίωση αισθητηριακής ολοκλήρωσης και λεπτών κινητικών δεξιοτήτων",
        "Καθιέρωση μη λεκτικής επικοινωνίας μεταξύ των ομάδων μαθητών",
      ],
    },
    {
      image: image2,
      title: "Γέφυρες Συνεργασίας: Συνδημιουργία",
      description:
        "Στη δεύτερη φάση, οι μαθητές εργάστηκαν σε μικτές εθνικότητες ζευγάρια για την κατασκευή μεγαλύτερων σκευών με τεχνικές coil και slab. Αυτό απαιτούσε διαπραγμάτευση, υπομονή και συλλογική λήψη αποφάσεων, ενισχύοντας βαθιές διαπροσωπικές σχέσεις.",
      outcomes: [
        "Ανάπτυξη στρατηγικών συνεργατικής επίλυσης προβλημάτων",
        "Δημιουργία μοναδικών μεγάλων συνεργατικών σκευών",
      ],
    },
    {
      image: image3,
      title: "Γυάλισμα & Πολιτιστικά Σχέδια",
      description:
        "Το τελικό εργαστήριο διερεύνησε τη διακόσμηση επιφανειών. Οι μαθητές μοιράστηκαν παραδοσιακά σχέδια από τις χώρες τους — πολωνικά λαϊκά μοτίβα εμπνευσμένα από τα λουλούδια Łowicz και την τέχνη wycinanki, τουρκικά μοτίβα πλακιδίων İznik και οθωμανικά γεωμετρικά σχέδια, ελληνικά γεωμετρικά σχέδια — συνδυάζοντάς τα σε νέες, υβριδικές οπτικές αφηγήσεις.",
      outcomes: [
        "Διαπολιτισμική εκτίμηση και καλλιτεχνική ανταλλαγή",
        "Κατάκτηση τεχνικών υπογυάλωσης",
      ],
    },
  ],

  pl: [
    {
      image: image1,
      title: "Odkrywanie Dotykowe i Surowce",
      description:
        "Pierwsze warsztaty koncentrowały się na sensorycznym doświadczeniu gliny. Uczniowie eksplorowali różne tekstury, temperatury i konsystencje surowych materiałów ziemnych. Ta podstawowa faza pozwoliła uczestnikom komunikować się poprzez dotyk, omijając bariery językowe.",
      outcomes: [
        "Poprawa integracji sensorycznej i zdolności motorycznych",
        "Ustanowienie komunikacji niewerbalnej między grupami uczniów",
      ],
    },
    {
      image: image2,
      title: "Budowanie Mostów: Współtworzenie",
      description:
        "W drugiej fazie uczniowie pracowali w parach o mieszanej narodowości, aby stworzyć większe naczynia za pomocą technik coil i slab. Wymagało to negocjacji, cierpliwości i wspólnego podejmowania decyzji, wzmacniając głębokie więzi międzyludzkie.",
      outcomes: [
        "Rozwój strategii współpracy w rozwiązywaniu problemów",
        "Tworzenie unikalnych, dużych współtworzonych naczyń",
      ],
    },
    {
      image: image3,
      title: "Szkliwienie i Motywy Kulturowe",
      description:
        "Ostatnie warsztaty poświęcone były dekoracji powierzchni. Uczniowie dzielili się tradycyjnymi wzorami ze swoich krajów — polskie motywy ludowe inspirowane wzorami kwiatowymi Łowicza i wycinanką, tureckie wzory płytek İznik i motywy geometryczne Osmanów, greckie wzory geometryczne — łącząc je w nowe, hybrydowe narracje wizualne.",
      outcomes: [
        "Międzykulturowa wymiana artystyczna i docenienie innych kultur",
        "Opanowanie technik podszkliwnych",
      ],
    },
  ],

  tr: [
    {
      image: image1,
      title: "Dokunsal Keşif & Ham Malzemeler",
      description:
        "İlk atölye, kilin duyusal deneyimine odaklandı. Öğrenciler farklı dokular, sıcaklıklar ve ham toprak malzemelerin kıvamlarını keşfettiler. Bu temel aşama, katılımcıların dil engellerini aşarak dokunma yoluyla iletişim kurmasını sağladı.",
      outcomes: [
        "Duyusal bütünleşme ve ince motor becerilerde gelişim",
        "Öğrenci grupları arasında sözsüz iletişimin kurulması",
      ],
    },
    {
      image: image2,
      title: "Köprüler Kurmak: Ortak Yaratım",
      description:
        "İkinci aşamada öğrenciler, karışık uyruklu çiftler halinde coil ve slab teknikleri ile daha büyük kaplar yaptılar. Bu süreç müzakere, sabır ve ortak karar almayı gerektirdi ve derin kişilerarası bağlar geliştirdi.",
      outcomes: [
        "İş birliği ile problem çözme stratejilerinin geliştirilmesi",
        "Benzersiz büyük ölçekli ortak çalışmaların oluşturulması",
      ],
    },
    {
      image: image3,
      title: "Sırlama & Kültürel Motifler",
      description:
        "Son atölye, yüzey dekorasyonunu keşfetti. Öğrenciler ülkelerinden gelen geleneksel desenleri paylaştı — Polonya halk motifleri, Łowicz çiçek desenleri ve wycinanki; Türk İznik çini desenleri ve Osmanlı geometrik motifleri; Yunan geometrik desenleri — bunları yeni, hibrit görsel anlatılara dönüştürdüler.",
      outcomes: [
        "Kültürlerarası takdir ve sanatsal değişim",
        "Alt sırlama tekniklerinde ustalık",
      ],
    },
  ],
};

export default workshopData;
