import { _mock } from "./_mock";

// ----------------------------------------------------------------------

export const _categories = [
  { label: "Marketing", path: "" },
  { label: "Community", path: "" },
  { label: "Tutorials", path: "" },
  { label: "Business", path: "" },
  { label: "Management", path: "" },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: "github",
    label: "GitHub",
    icon: "carbon:logo-github",
    color: "white",
    url: "https://github.com/NucleoidJS/Nucleoid",
  },
  {
    value: "x",
    label: "X",
    icon: "carbon:logo-x",
    color: "white",
    url: "https://twitter.com/NucleoidJS",
  },
  {
    value: "discord",
    label: "Discord",
    icon: "carbon:logo-discord",
    color: "white",
    url: "https://discord.gg/wN49SNssUw",
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ["Jordan", "Canada", "Portugal"].map(
  (office, index) => ({
    id: _mock.id(index),
    country: office,
    address: _mock.fullAddress(index),
    phoneNumber: _mock.phoneNumber(index),
    email: _mock.email(index),
    photo: _mock.image.travel(index + 4),
    latlng: LAT_LONG[index],
  }),
);

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  "airbnb",
  "dropbox",
  "facebook",
  "google",
  "heroku",
  "lenovo",
  "microsoft",
  "netflix",
  "slack",
  "spotify",
  "tripadvisor",
  "vimeo",
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  {
    question: "What is Nucleoid?",
    answer:
      "Nucleoid is a Declarative (Logic) Runtime Environment (D(L)RE) designed to simplify programming by abstracting the logic layer from the imperative code structure. It allows developers to define the logic of their applications declaratively, which the runtime environment then executes efficiently. This approach aims to reduce complexity, improve maintainability, and enhance the scalability of software applications.",
  },
  {
    question:
      "How does Nucleoid differ from traditional programming environments?",
    answer:
      'Traditional programming environments typically rely on imperative programming paradigms, where the developer explicitly codes not only what the program should achieve but also how it should do it, step by step. Nucleoid, being a Declarative (Logic) Runtime Environment, focuses on the "what" part—allowing developers to specify the desired outcomes or logic without detailing the control flow or state management. This can lead to more intuitive code, easier maintenance, and potentially fewer bugs, as Nucleoid manages the execution path and state internally.',
  },
  {
    question: "What are the main features of Nucleoid?",
    answer:
      "Declarative Logic Processing: Enables defining application logic in a declarative manner, focusing on the logic rules and desired outcomes.\n" +
      "Automatic State Management: Manages application state automatically, reducing the need for explicit state management code and minimizing state-related bugs.\n" +
      "Efficiency and Performance: Optimized to efficiently execute declarative logic, potentially improving performance for certain types of applications.\n" +
      "Ease of Use: Aims to provide a simpler and more intuitive approach to application development, especially for complex logic and state management scenarios.",
  },
  {
    question: "Can Nucleoid be used in a microservices architecture?",
    answer:
      "Yes, Nucleoid can be integrated into a microservices architecture. Its declarative logic and automatic state management make it well-suited for building individual microservices, especially those requiring complex logic or state management. Nucleoid's runtime environment can run independently within a microservice, allowing developers to implement business logic declaratively and efficiently. Its compatibility with standard technologies and ability to integrate with other services and databases make it a flexible choice for microservices-based applications.",
  },
  {
    question: "How does Nucleoid ensure data consistency and integrity?",
    answer:
      "Nucleoid ensures data consistency and integrity through its internal mechanisms for state management and transaction handling. By abstracting the state and logic, it provides a framework where all state changes are controlled and validated by the runtime environment. This minimizes the risk of inconsistencies and integrity violations. Additionally, Nucleoid can be configured to work with external databases and systems, where it leverages existing mechanisms for data consistency and transactional integrity, ensuring that the application logic aligns with the data storage and management policies.",
  },
].map(({ question, answer }, index) => ({
  id: _mock.id(index),
  question,
  answer,
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  "I Want To Check Where My Order Is Delivered",
  "[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?",
  "[Seller] Start Selling With Shopee",
  "Why Is My Account Locked/Limited?",
  "Free Shipping Code User Guide (Freeship Code)",
  "How To Buy / Order On Shopee App",
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    "Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.",
}));
