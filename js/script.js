let signImg = document.querySelector(".sign-section__wrapper");
let btnSection = document.querySelector(".btn-section");
let signSection = document.querySelector(".sign");
let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let or = document.querySelector(".or");
let step1 = document.querySelector(".step_one");
let step2 = document.querySelector(".step_two");
let step3 = document.querySelector(".step_three");
let mainSection = document.querySelector(".main-section");
let statusSection = document.querySelector(".status-section");
let profileSection = document.querySelector(".profile-section");
let plansSection = document.querySelector(".plans-section");
let buttons = document.querySelectorAll("button");
let inputEmail = document.querySelector(".signInEmail");
let emailPattern =
  /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let password = "";
let user = [];
let tempUser = {};
let foundUser = [];
let email = "";
let userArr = [];
let exercisesHTML = [];
let newWeight
document.querySelector('.editingBtn').disabled = true

if (window.location.reload) {
  sessionStorage.setItem("nowSection", ".main-section");
  sessionStorage.setItem("previousSection", "");
}

if (localStorage.getItem("userInfo")) {
  user = JSON.parse(localStorage.getItem("userInfo"));
} else {
  let user = [
    {
      id: 1,
      name: "Андрей",
      email: "andrixa007@gmail.com",
      password: "Aa12345678",
      weight: 74.5,
      goalWeight: 72,
      height: 180,
      permission: "user",
    },
    {
      id: 2,
      name: "Андройд",
      email: "andrixa077@gmail.com",
      password: "Aa12345678",
      weight: 80.5,
      goalWeight: 75,
      height: 175,
      permission: "trainer",
    },
    {
      id: 3,
      name: "Андромеда",
      email: "andrixa777@gmail.com",
      password: "Aa12345678",
      weight: 85.5,
      goalWeight: 67,
      height: 175,
      permission: "admin",
    },
  ];

  localStorage.setItem("userInfo", JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem("userInfo")));
  console.log("user", user);
}

let exercisesList = [
  {
    musclesId: 1,
    bodyPart: "Мышцы ног",
    imgURL: "img/Ноги.jpg",
    exercise: [
      {
        id: 1,
        name: "Подъем правой ноги",
        repetitions: 16,
        imgURL: "img/подъем правой ноги.png",
        description:
          "Лягте на спину, поднимите правую ногу вверх, удерживая ее прямой. Опустите ногу обратно, не касаясь пола. Это упражнение помогает укрепить мышцы бедер и ягодиц.",
      },
      {
        id: 2,
        name: "Подъем левой ноги",
        repetitions: 16,
        imgURL: "img/подъем левой ноги.png",
        description:
          "Лягте на спину, поднимите левую ногу вверх, удерживая ее прямой. Опустите ногу обратно, не касаясь пола. Это упражнение развивает силу и гибкость ног.",
      },
      {
        id: 3,
        name: "Приседания",
        repetitions: 15,
        imgURL: "",
        description:
          "Встаньте прямо, ноги на ширине плеч. Согните колени и опустите таз назад, как будто садитесь на стул. Держите спину прямой и не допускайте, чтобы колени выходили за носки. Это упражнение прорабатывает квадрицепсы, ягодицы и мышцы спины.",
      },
      {
        id: 4,
        name: "Выпады",
        repetitions: 12,
        imgURL: "",
        description:
          "Сделайте шаг вперед одной ногой и опустите тело вниз, сгибая оба колена под углом 90 градусов. Колено задней ноги должно почти касаться пола. Вернитесь в исходное положение. Выпады развивают силу ног и улучшают баланс.",
      },
      {
        id: 5,
        name: "Мертвая тяга",
        repetitions: 10,
        imgURL: "",
        description:
          "Держите штангу перед собой на уровне бедер. Наклонитесь вперед с прямой спиной, опуская штангу вдоль ног до уровня колен. Затем вернитесь в исходное положение, выпрямляя корпус. Это упражнение укрепляет заднюю цепь мышц (ягодицы и спину).",
      },
      {
        id: 6,
        name: "Сгибание ног в тренажере",
        repetitions: 15,
        imgURL: "",
        description:
          "Сядьте в тренажер для сгибания ног с установленным весом. Убедитесь, что ваши ноги находятся под валиком. Согните ноги в коленях, поднимая валик к ягодицам, затем медленно вернитесь в исходное положение. Это упражнение изолирует мышцы задней поверхности бедра.",
      },
      {
        id: 7,
        name: "Разгибание ног в тренажере",
        repetitions: 15,
        imgURL: "",
        description:
          "Сядьте в тренажер для разгибания ног с установленным весом. Убедитесь, что ваши ноги находятся под валиком. Разгибайте ноги в коленях до полного выпрямления и медленно возвращайтесь обратно. Это упражнение нацелено на квадрицепсы.",
      },
      {
        id: 8,
        name: "Подъем на носки стоя",
        repetitions: 20,
        imgURL: "",
        description:
          "Встаньте прямо с ногами на ширине плеч. Поднимитесь на носки и удерживайте позицию на секунду, затем вернитесь в исходное положение. Это упражнение укрепляет икроножные мышцы.",
      },
      {
        id: 9,
        name: "Боковые выпады",
        repetitions: 12,
        imgURL: "",
        description:
          "Шагните вбок одной ногой и опустите тело в сторону, сгибая колено рабочей ноги, а другую ногу держите прямой. Вернитесь в исходное положение и повторите с другой стороны. Боковые выпады развивают внутренние и внешние мышцы бедер.",
      },
      {
        id: 10,
        name: "Плие-приседания",
        repetitions: 15,
        imgURL: "",
        description:
          "Встаньте с широко расставленными ногами и развернутыми носками (примерно под углом 45 градусов). Согните колени и опустите таз вниз, как будто садитесь на стул. Это упражнение акцентирует внимание на внутренней поверхности бедер.",
      },
    ],
  },
  {
    musclesId: 2,
    bodyPart: "Грудные мышцы",
    imgURL: "img/Грудь.jpg",
    exercise: [
      {
        id: 11,
        name: "Жим штанги лежа",
        repetitions: 10,
        imgURL: "",
        description:
          "Лягте на горизонтальную скамью с штангой над грудью . Опустите штангу к груди , затем выжмите её вверх до полного выпрямления рук . Это базовое упражнение для развития грудных мышц.",
      },
      {
        id: 12,
        name: "Отжимания",
        repetitions: 12,
        imgURL: "img/отжмания.png",
        description:
          "Примите упор лежа с прямым телом . Опуститесь вниз , сгибая локти , затем вернитесь в исходное положение . Это упражнение эффективно развивает грудные , трицепсы и плечи.",
      },
      {
        id: 13,
        name: "Разведение гантелей",
        repetitions: 12,
        imgURL: "",
        description:
          "Лягте на скамью , держа гантели над грудью . Разведите руки в стороны до уровня груди , затем верните их обратно . Это упражнение акцентирует внимание на грудных мышцах.",
      },
      {
        id: 14,
        name: "Жим гантелей на наклонной скамье",
        repetitions: 10,
        imgURL: "",
        description:
          "Сядьте на наклонную скамью с гантелями у плеч . Жмите гантели вверх до полного выпрямления рук . Это упражнение направлено на верхнюю часть грудных мышц.",
      },
      {
        id: 15,
        name: "Кроссоверы на тренажере",
        repetitions: 15,
        imgURL: "",
        description:
          "Установите тренажер для кроссоверов на нужный вес . Встаньте между ручками и тяните их к центру тела , сводя руки вместе перед собой . Это упражнение хорошо прорабатывает грудные мышцы.",
      },
      {
        id: 16,
        name: "Отжимания с узким хватом",
        repetitions: 10,
        imgURL: "",
        description:
          "Примите упор лежа с руками близко друг к другу (узкий хват) . Опуститесь вниз до уровня груди и вернитесь обратно . Это упражнение акцентирует внимание на трицепсах.",
      },
      {
        id: 17,
        name: "Жим штанги на наклонной скамье",
        repetitions: 10,
        imgURL: "",
        description:
          "Лягте на наклонную скамью , держите штангу на уровне груди . Поднимите штангу вверх до полного выпрямления рук и опустите обратно . Это упражнение развивает верхнюю часть грудных мышц.",
      },
      {
        id: 18,
        name: "Пулловер с гантелей",
        repetitions: 12,
        imgURL: "",
        description:
          "Лягте поперек скамьи , держа гантель обеими руками над головой . Опустите гантель за голову , затем верните её обратно . Это упражнение помогает растянуть грудные мышцы.",
      },
      {
        id: 19,
        name: "Отжимания на брусьях",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Удерживайте тело между брусьями , опускайтесь вниз , сгибая локти , затем поднимайтесь обратно . Это упражнение эффективно развивает грудные мышцы и трицепсы.",
      },
      {
        id: 20,
        name: "Жим гантелей в положении сидя",
        repetitions: 10,
        imgURL: "",
        description:
          "Сядьте на скамью , держите гантели на уровне плеч . Жмите гантели вверх до полного выпрямления рук .",
      },
    ],
  },
  {
    musclesId: 3,
    bodyPart: "Мышцы спины",
    imgURL: "img/Спина.jpg",
    exercise: [
      {
        id: 21,
        name: "Тяга штанги в наклоне",
        repetitions: 10,
        imgURL: "",
        description:
          "Встаньте прямо , держите штангу перед собой . Наклонитесь вперёд , сохраняя спину прямой , и потяните штангу к животу . Это упражнение хорошо прорабатывает мышцы спины.",
      },
      {
        id: 22,
        name: "Подтягивания",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Повисните на перекладине , затем подтянитесь вверх , пока подбородок не окажется выше перекладины . Подтягивания развивают широчайшие мышцы спины.",
      },
      {
        id: 23,
        name: "Тяга верхнего блока",
        repetitions: 12,
        imgURL: "",
        description:
          "Сядьте за тренажером , возьмите ручку верхнего блока . Тяните ручку к груди , сводя лопатки вместе . Это упражнение изолирует верхнюю часть спины.",
      },
      {
        id: 24,
        name: "Становая тяга",
        repetitions: 10,
        imgURL: "",
        description:
          "Держите штангу перед собой . Согните колени и наклонитесь вперёд , затем выпрямитесь , поднимая штангу . Становая тяга укрепляет всю заднюю цепь мышц.",
      },
      {
        id: 25,
        name: "Гиперэкстензии",
        repetitions: 15,
        imgURL: "",
        description:
          "Лягте лицом вниз на тренажер для гиперэкстензий . Поднимайте верхнюю часть тела вверх , затем медленно опускайтесь . Это упражнение укрепляет поясничные мышцы.",
      },
      {
        id: 26,
        name: "Тяга гантели одной рукой",
        repetitions: 12,
        imgURL: "",
        description:
          "Встаньте рядом со скамьей , держите гантель одной рукой . Наклонитесь вперёд и тяните гантель к животу . Это упражнение акцентирует внимание на одной стороне спины.",
      },
      {
        id: 27,
        name: "Тяга к подбородку",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите штангу или гантели перед собой . Тяните груз к подбородку , сводя локти вместе . Это упражнение развивает трапециевидные мышцы.",
      },
      {
        id: 28,
        name: "Тяга горизонтального блока",
        repetitions: 12,
        imgURL: "",
      },
      {
        id: 29,
        name: "Супермен",
        repetitions: 15,
        imgURL: "",
        description:
          "Лягте лицом вниз, вытянув руки и ноги. Поднимайте одновременно руки и ноги от пола, удерживая их в верхней точке на 1-2 секунды, затем медленно опустите обратно. Это упражнение помогает укрепить мышцы поясницы, ягодиц и задней поверхности бедер. Оно также улучшает общую стабильность корпуса и осанку.",
      },
      {
        id: 30,
        name: "Планка с поднятой рукой",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Примите позицию планки на локтях или руках, тело должно быть прямым от головы до пяток. Поднимайте поочередно руки вверх, удерживая тело ровным. Это упражнение развивает силу корпуса и улучшает баланс. Убедитесь, что ваши бедра не провисают и не поднимаются слишком высоко.",
      },
    ],
  },
  {
    musclesId: 4,
    bodyPart: "Мышцы плеч",
    imgURL: "img/Плечи.jpg",
    exercise: [
      {
        id: 31,
        name: "Жим гантелей стоя",
        repetitions: 10,
        imgURL: "",
        description:
          "Встаньте прямо с гантелями у плеч. Жмите гантели вверх до полного выпрямления рук. Убедитесь, что ваши локти находятся немного впереди тела во время жима. Это упражнение развивает дельтовидные мышцы и помогает улучшить общую силу верхней части тела.",
      },
      {
        id: 32,
        name: "Подъем гантелей в стороны",
        repetitions: 12,
        imgURL: "",
        description:
          "Встаньте прямо с гантелями по бокам. Поднимайте руки в стороны до уровня плеч, держа локти слегка согнутыми. Это упражнение акцентирует внимание на боковых дельтовидных мышцах и помогает создать более широкую линию плеч.",
      },
      {
        id: 33,
        name: "Тяга к подбородку",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите штангу или гантели перед собой. Тяните груз к подбородку, сводя локти вместе. Убедитесь, что ваши локти выше уровня плеч во время выполнения этого упражнения для максимальной активации трапециевидных мышц.",
      },
      {
        id: 34,
        name: "Разведение гантелей в наклоне",
        repetitions: 12,
        imgURL: "",
        description:
          "Наклонитесь вперед с гантелями в руках. Разведите руки в стороны до уровня плеч, удерживая локти слегка согнутыми. Это упражнение акцентирует внимание на задних дельтовидных мышцах и помогает улучшить общую симметрию плеч.",
      },
      {
        id: 35,
        name: "Жим штанги из-за головы",
        repetitions: 10,
        imgURL: "",
        description:
          "Сядьте или стойте с штангой за головой. Жмите штангу вверх до полного выпрямления рук. Убедитесь, что ваша спина остается прямой во время выполнения этого упражнения для предотвращения травм.",
      },
      {
        id: 36,
        name: "Подъем штанги перед собой",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите штангу перед собой на уровне бедер. Поднимайте ее до уровня плеч, сохраняя спину прямой и локти слегка согнутыми. Это упражнение помогает развивать передние дельтовидные мышцы и улучшает общую силу верхней части тела.",
      },
      {
        id: 37,
        name: "Обратное разведение на тренажере",
        repetitions: 12,
        imgURL: "",
        description:
          "Сядьте за тренажером для обратного разведения. Разведите руки назад до уровня плеч, удерживая локти слегка согнутыми. Это упражнение акцентирует внимание на задних дельтовидных мышцах и помогает сбалансировать развитие плеч.",
      },
      {
        id: 38,
        name: "Планка с отведением руки",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Примите позицию планки на руках или локтях. Отводите поочередно руки назад, удерживая тело ровным. Это упражнение развивает силу корпуса и улучшает баланс, а также активирует мышцы плеч.",
      },
      {
        id: 39,
        name: "Жим гантелей на наклонной скамье",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Сядьте на наклонную скамью с гантелями у плеч. Жмите их вверх до полного выпрямления рук. Это упражнение направлено на развитие верхней части грудных мышц и дельтовидных мышц.",
      },
      {
        id: 40,
        name: "Фронтальные подъемы гантелей",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Встаньте прямо с гантелями по бокам. Поднимайте их вперед до уровня плеч, удерживая спину прямой и локти слегка согнутыми. Это упражнение акцентирует внимание на передних дельтовидных мышцах.",
      },
    ],
  },
  {
    musclesId: 5,
    bodyPart: "Мышцы рук",
    imgURL: "img/Руки.jpg",
    exercise: [
      {
        id: 41,
        name: "Сгибание рук со штангой",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите штангу обеими руками перед собой . Сгибайте локти , поднимая штангу к плечам . Убедитесь , что ваши локти остаются неподвижными во время выполнения этого упражнения , чтобы максимально активировать бицепсы.",
      },
      {
        id: 42,
        name: "Французский жим",
        repetitions: 12,
        imgURL: "",
        description:
          "Лягте на спину или сидя держите штангу над головой . Сгибайте локти , опуская штангу за голову . Это упражнение эффективно развивает трицепсы , а также помогает улучшить общую силу рук.",
      },
      {
        id: 43,
        name: "Сгибание рук с гантелями",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите по одной гантели в каждой руке . Сгибайте локти , поднимая их к плечам . Обратите внимание на то , чтобы не раскачиваться во время выполнения этого упражнения.",
      },
      {
        id: 44,
        name: "Отжимания на брусьях",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Удерживайте тело между брусьями , опускайтесь вниз , сгибая локти , затем поднимайтесь обратно . Это упражнение эффективно развивает грудные мышцы , трицепсы и плечи.",
      },
      {
        id: 45,
        name: "Разгибание рук на блоке",
        repetitions: 12,
        imgURL: "",
        description:
          "Стоя у блока возьмите ручку двумя руками . Разгибайте руки вниз . Это упражнение хорошо изолирует трицепсы и помогает развивать силу рук.",
      },
      {
        id: 46,
        name: "Молотковые сгибания",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите по одной гантели в каждой руке ладонями друг к другу . Сгибайте локти , поднимая гантели к плечам . Это упражнение эффективно развивает бицепсы и предплечья.",
      },
      {
        id: 47,
        name: "Отжимания от пола",
        repetitions: "до отказа",
        imgURL: "",
        description:
          "Примите упор лежа . Опускайтесь вниз , сгибая локти , затем поднимайтесь обратно . Это базовое упражнение для тренировки грудных мышц , трицепсов и плеч.",
      },
      {
        id: 48,
        name: "Жим узким хватом",
        repetitions: 10,
        imgURL: "",
        description:
          "Лягте на спину со штангой над грудью узким хватом . Жмите вверх до полного выпрямления рук . Это упражнение акцентирует внимание на трицепсах.",
      },
      {
        id: 49,
        name: "Сгибание рук на скамье Скотта",
        repetitions: 12,
        imgURL: "",
        description:
          "Сидя за столом Скотта держите штангу или гантели . Сгибайте руки к плечам . Это упражнение изолирует бицепсы и позволяет избежать раскачивания.",
      },
      {
        id: 50,
        name: "Разгибание рук с гантелями",
        repetitions: 12,
        imgURL: "",
        description:
          "Держите по одной гантели в каждой руке над головой . Разгибайте руки назад , контролируя движение . Это упражнение эффективно развивает трицепсы.",
      },
    ],
  },
];

function sign() {
  // signImg.style.backgroundImage = 'url(/img/sing.png)'
  signImg.style.minHeight = "calc(100vh - 185px)";
  btnSection.style.display = "flex";
}

// Вход

function signInn() {
  signImg.style.minHeight = "calc(100vh - 400px)";
  signIn.style.display = "flex";
  signUp.style.display = "none";
  or.style.display = "flex";
  btnSection.style.flexDirection = "column-reverse";
  // document.getElementById("btnSignIn").onclick = mainSign;
  document.getElementById("btnSignIn").onclick = validateSingIn;
  document.getElementById("create").onclick = signUpp;
}

// Валидация входа

function validateSingIn() {
  console.log(
    document.querySelector(".signInEmail").value,
    document.querySelector(".signInPassword").value
  );
  password = document.querySelector(".signInPassword").value;
  console.log(password);
  validateCredentials(document.querySelector(".signInEmail").value, password);
}

function emailValidate() {
  if (!emailPattern.test(document.querySelector(".signInEmail").value)) {
    document.querySelector(".signInEmail").placeholder = "Некорректный формат!";
    document.querySelector(".signInEmail").style.border = "2px solid red";
    document.querySelector(".signInEmail").value = "";
    console.log("Некорректный формат имейла.");
    return false;
  } else {
    document.querySelector(".signInEmail").placeholder = "Email";
    document.querySelector(".signInEmail").style.border = "2px solid green";
    email = document.querySelector(".signInEmail").value;
  }
}

function passwordValidate() {
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(document.querySelector(".signInPassword").value)) {
    document.querySelector(".signInPassword").style.border = "2px solid red";
    document.querySelector(".signInPassword").placeholder =
      "Хотя бы 1 заглавная и 1 цифра";
    document.querySelector(".signInPassword").value = "";
    console.log(
      "Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру."
    );
    return false;
  } else {
    document.querySelector(".signInPassword").style.border = "2px solid green";
  }
}

function validateCredentials() {
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!emailPattern.test(document.querySelector(".signInEmail").value)) {
    document.querySelector(".signInEmail").placeholder = "Некорректный формат!";
    document.querySelector(".signInEmail").style.border = "2px solid red";
    document.querySelector(".signInEmail").value = "";
    console.log("Некорректный формат имейла.");
    return false;
  } else {
    document.querySelector(".signInEmail").placeholder = "Email";
    document.querySelector(".signInEmail").style.border = "2px solid green";
    email = document.querySelector(".signInEmail").value;
  }

  if (!passwordPattern.test(document.querySelector(".signInPassword").value)) {
    document.querySelector(".signInPassword").style.border = "2px solid red";
    document.querySelector(".signInPassword").placeholder =
      "Хотя бы 1 заглавная и 1 цифра";
    document.querySelector(".signInPassword").value = "";
    console.log(
      "Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру."
    );
    return false;
  } else {
    document.querySelector(".signInPassword").style.border = "2px solid green";
  }

  console.log("Имейл и пароль валидны.");
  findUserByEmail(document.querySelector(".signInEmail").value);
  return true;
}

function findUserByEmail(email) {
  let arr = JSON.parse(localStorage.getItem("userInfo"));
  foundUser = arr.find((u) => u.email === email);
  console.log(password);

  if (foundUser) {
    if (foundUser.password == password) {
      console.log("Данные пользователя:", foundUser);
      mainSign();
      textGenerateForUser(foundUser);
      sessionStorage.setItem("userEmail", foundUser.email);
    } else {
      console.log(foundUser.password, password);
      console.log(foundUser.password);
      console.log("Неверный пароль.");
    }
  } else {
    console.log("Пользователь не найден.");
  }
}

function findUserBySession(email) {
  userArr = user.find((u) => u.email === email);
  return userArr.id
}

if (sessionStorage.getItem("userEmail")) {
  findUserBySession("andrixa007@gmail.com");
  document.querySelector(".sign").style.display = "none";
  mainSection.style.display = "flex";
  textGenerateForUser(userArr);
}

function textGenerateForUser(arr) {
  if (arr.name) {
    console.log(arr.name)
    document.querySelectorAll(".userNameContainer").forEach((el) => {
      el.textContent = `, ${arr.name}`;
      document.getElementById("editName").value = arr.name;
    });
  }
  document.querySelector(".userHeight").textContent = arr.height;
  document.querySelector(".userVes").textContent = arr.weight;
  document.querySelector(".userGoal").textContent = arr.goalWeight;
  document.querySelector(".imt").textContent = Math.round(
    (arr.weight / (arr.height * arr.height)) * 10000
  ).toFixed(1);
  document.querySelector(".ideal_weight").textContent = Math.round(
    (arr.height - 100) * 0.9
  );
  document.getElementById("editWeight").value = `${arr.weight} КГ`;
  document.getElementById("editHeight").value = `${arr.height} СМ`;
}


const nameInput = document.getElementById("editName");
const weightInput = document.getElementById("editWeight");
const heightInput = document.getElementById("editHeight");
let timeoutId;

// Функция для фильтрации ввода
function filterInput(value) {
    return value.replace(/[^0-9.]/g, '');
}

// Общая функция для обработки инпутов
function handleInput(inputElement, unit, minValue, maxValue, errorElement) {
    inputElement.addEventListener('input', function () {
        // Удаляем единицы измерения из значения
        document.querySelector('.editingBtn').disabled = true
        this.value = this.value.replace(` ${unit}`, '');
        
        // Фильтруем вводимые символы
        this.value = filterInput(this.value);

        // Если есть активный таймер, очищаем его
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Проверка на допустимые значения
        if (this.value < minValue || this.value > maxValue) {
            errorElement.style.display = 'flex';
            return false;
        } else {
            errorElement.style.display = 'none';
        }

        timeoutId = setTimeout(() => {
            let newValue = this.value;
            if (newValue.slice(-1) === '.') {
                newValue = newValue.slice(0, -1); // Удаляем точку
                this.value = newValue; // Обновляем значение инпута
            }
            console.log(newValue);
            param = newValue
            this.value += ` ${unit}`; // Добавляем единицы измерения
            document.querySelector('.editingBtn').disabled = false
        }, 1000);
    });
}

handleInput(weightInput, 'КГ', 50, 110, document.querySelector('.weightError'));

handleInput(heightInput, 'СМ', 140, 220, document.querySelector('.heightError'));

nameInput.addEventListener('input', function() {
  this.value = this.value.replace(/\s+/g, ''); // Удаляем все пробелы
  document.querySelector('.editingBtn').disabled = false
});

document.querySelector('.editingBtn').addEventListener('click', function() {
  const name = nameInput.value.trim();
  let weight = parseFloat(weightInput.value.replace(' КГ', ''));
  let height = parseFloat(heightInput.value.replace(' СМ', ''));

  // Проверяем, что имя не пустое
  if (name === "") {
    alert("Пожалуйста, введите ваше имя.");
    return;
}

if (name.length < 3) {
  document.querySelector('.errorName').style.display = 'flex'
  return;
} else {
  document.querySelector('.errorName').style.display = 'none'
}

  if (isNaN(weight) || isNaN(height)) {
      alert("Пожалуйста, введите корректные числовые значения.");
      return;
  }

  if (weight < 50 || weight > 110) {
      document.getElementById('editWeight').style.border = '2px solid red'
      return;
  } else {
    document.getElementById('editWeight').style.border = '2px solid rgb(161, 161, 161)'
  }
  
  if (height < 140 || height > 220) {
      document.getElementById('editHeight').style.border = '2px solid red'
      return;
  } else {
    document.getElementById('editHeight').style.border = '2px solid rgb(161, 161, 161)'
  }

  console.log(`Имя: ${name}, Вес: ${weight} КГ, Рост: ${height} СМ`);
  user[findUserBySession(email) - 1].name = name
  user[findUserBySession(email) - 1].weight = weight
  user[findUserBySession(email) - 1].height = height
  localStorage.setItem('userInfo', JSON.stringify(user))

  document.querySelectorAll(".userNameContainer").forEach((el) => {
    el.textContent = `, ${user[findUserBySession(email) - 1].name}`;
  });
  document.querySelector(".userHeight").textContent = user[findUserBySession(email) - 1].height;
  document.querySelector(".userVes").textContent = user[findUserBySession(email) - 1].weight;
  document.querySelector(".userGoal").textContent = user[findUserBySession(email) - 1].goalWeight;
  document.querySelector(".imt").textContent = Math.round(
    (user[findUserBySession(email) - 1].weight / (user[findUserBySession(email) - 1].height * user[findUserBySession(email) - 1].height)) * 10000
  ).toFixed(1);
  document.querySelector(".ideal_weight").textContent = Math.round(
    (user[findUserBySession(email) - 1].height - 100) * 0.9
  );
  document.getElementById("editName").value = user[findUserBySession(email) - 1].name;
  document.getElementById("editWeight").value = `${user[findUserBySession(email) - 1].weight} КГ`;
  document.getElementById("editHeight").value = `${user[findUserBySession(email) - 1].height} СМ`;
  
  
})
// Регистрация

function signUpp() {
  signImg.style.minHeight = "calc(100vh - 485px)";
  signIn.style.display = "none";
  signUp.style.display = "flex";
  btnSection.style.flexDirection = "column";
  or.style.display = "none";
  document.getElementById("create").onclick = mainSignUp;
  document.getElementById("btnSignIn").onclick = signInn;
}

function emailValidateSignUp() {
  if (!emailPattern.test(document.querySelector(".signUpEmail").value)) {
    document.querySelector(".signUpEmail").placeholder = "Некорректный формат!";
    document.querySelector(".signUpEmail").style.border = "2px solid red";
    document.querySelector(".signUpEmail").value = "";
    console.log("Некорректный формат имейла.");
    return false;
  } else {
    document.querySelector(".signUpEmail").placeholder = "Email";
    document.querySelector(".signUpEmail").style.border = "2px solid green";
    email = document.querySelector(".signUpEmail").value;
  }
}

function passwordValidateSignUpFirst() {
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (
    !passwordPattern.test(document.querySelector(".signFirstUpPassword").value)
  ) {
    document.querySelector(".signFirstUpPassword").style.border =
      "2px solid red";
    document.querySelector(".signFirstUpPassword").placeholder =
      "Хотя бы 1 заглавная и 1 цифра";
    document.querySelector(".signFirstUpPassword").value = "";
    console.log(
      "Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру."
    );
    return false;
  } else {
    document.querySelector(".signFirstUpPassword").style.border =
      "2px solid green";
  }
}

function passwordValidateSignUpSecond() {
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (
    !passwordPattern.test(document.querySelector(".signSecondUpPassword").value)
  ) {
    document.querySelector(".signSecondUpPassword").style.border =
      "2px solid red";
    document.querySelector(".signSecondUpPassword").placeholder =
      "Хотя бы 1 заглавная и 1 цифра";
    document.querySelector(".signSecondUpPassword").value = "";
    console.log(
      "Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру."
    );
    return false;
  } else {
    document.querySelector(".signSecondUpPassword").style.border =
      "2px solid green";
  }
}

function mainSignUp() {
  email = document.querySelector(".signUpEmail").value;
  console.log(email);

  if (!emailPattern.test(document.querySelector(".signUpEmail").value)) {
    document.querySelector(".signUpEmail").placeholder = "Некорректный формат!";
    document.querySelector(".signUpEmail").style.border = "2px solid red";
    document.querySelector(".signUpEmail").value = "";
    console.log("Некорректный формат имейла.");
    return false;
  } else {
    document.querySelector(".signUpEmail").placeholder = "Email";
    document.querySelector(".signUpEmail").style.border = "2px solid green";
  }

  let emailExists = user.some((user) => user.email === email);
  if (emailExists) {
    console.log("Пользователь с таким имейлом уже существует.");
    return;
  }

  if (
    document.querySelector(".signFirstUpPassword").value !=
    document.querySelector(".signSecondUpPassword").value
  ) {
    document.querySelector(".signFirstUpPassword").style.border =
      "2px solid red";
    document.querySelector(".signSecondUpPassword").style.border =
      "2px solid red";
    document.querySelector(".signSecondUpPassword").value = "";
    document.querySelector(".signSecondUpPassword").placeholder =
      "Пароли должны совпадать!";
    return;
  } else {
    password = document.querySelector(".signFirstUpPassword").value;
    document.querySelector(".signFirstUpPassword").style.border =
      "2px solid green";
    document.querySelector(".signSecondUpPassword").style.border =
      "2px solid green";
    console.log("asf");
  }

  if (!document.querySelector(".check").checked) {
    document.querySelector(".check").style.border = "2px solid red";
    return false;
  }

  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    console.log("Пароль не соответствует требованиям.");
    return;
  }
  let newId = user.length > 0 ? user[user.length - 1].id + 1 : 1;
  tempUser.id = newId;
  tempUser.email = email;
  tempUser.password = password;

  console.log(
    "Данные для первого этапа сохранены. Переходите ко второму этапу."
  );
  console.log(tempUser);

  stepFirst();
}

// Первый шаг

function stepFirst() {
  console.log("1");
  signSection.style.display = "none";
  step1.style.display = "flex";
  document.getElementById("weightInput").addEventListener("input", () => {
    if (document.getElementById("weightInput").value.length > 1) {
      if (
        document.getElementById("weightInput").value > 40 &&
        document.getElementById("weightInput").value < 140
      ) {
        document.getElementById("weightInput").value =
          document.getElementById("weightInput").value;
      } else {
        console.log("asd");
        document.getElementById("weightInput").value = "";
        document.getElementById("weightInput").style.border = "2px solid red";
        document.getElementById("weightInput").placeholder = "От 40 до 140кг!";
      }
    }
  });
}

// Второй шаг

function stepTwo() {
  console.log("2");
  step1.style.display = "none";
  step2.style.display = "flex";
  console.log(document.getElementById("weightInput").value);
  tempUser.weight = document.getElementById("weightInput").value;
}

// Третий шаг

function stepThree() {
  console.log("3");
  step2.style.display = "none";
  step3.style.display = "flex";
  tempUser.goalWeight = document.getElementById("goalWeightInput").value;
  console.log(tempUser);
}

//
// ROUTES
//

// Главная с регистрации

function main() {
  step3.style.display = "none";
  mainSection.style.display = "flex";
  localStorage.setItem("page", "mainPage");
  tempUser.height = document.getElementById("heightInput").value;
  user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user);
  user.push(tempUser);
  textGenerateForUser(tempUser);
  sessionStorage.setItem("userEmail", tempUser.email);
  localStorage.setItem("userInfo", JSON.stringify(user));
}

// Главная с входа

function mainSign() {
  signSection.style.display = "none";
  mainSection.style.display = "flex";
  sessionStorage.setItem("nowSection", ".main-section");
}

function return1() {
  step1.style.display = "none";
  signSection.style.display = "flex";
  signUpp();
}

function status() {
  if (localStorage.getItem("page") == "mainPage") {
    mainSection.style.display = "none";
    statusSection.style.display = "flex";
    localStorage.setItem("page", "statusPage");
  } else if (localStorage.getItem("page") == "statusPage") {
    statusSection.style.display = "none";
    mainSection.style.display = "flex";
    localStorage.setItem("page", "mainPage");
  }
}

function goToEditing() {
  profileSection.style.display = "none";
  document.querySelector(".editingData_section").style.display = "flex";
  sessionStorage.setItem('nowSection', '.editingData_section')
}

function goToPlan() {
  sessionStorage.setItem(
    "previousSection",
    sessionStorage.getItem("nowSection")
  );
  document.querySelector(
    `${sessionStorage.getItem("nowSection")}`
  ).style.display = "none";
  sessionStorage.setItem("nowSection", ".plans-section");
}

function backToMain() {
  document.querySelector(
    `${sessionStorage.getItem("nowSection")}`
  ).style.display = "none";
  document.querySelector(".allPLans-section").style.display = "none";
  mainSection.style.display = "flex";
  sessionStorage.setItem("nowSection", ".main-section");
  sessionStorage.setItem("previousSection", "");
}

function backToPlan() {
  document.querySelector(sessionStorage.getItem("nowSection")).style.display =
    "none";
  document.querySelector(sessionStorage.getItem("nowSection")).remove();
  document.querySelector(".plans-section").style.display = "flex";
  sessionStorage.setItem("nowSection", ".allPLans-section");
}

function goToAllPlans() {
  if (sessionStorage.getItem("previousSection") == ".allPLans-section") {
    sessionStorage.setItem("previousSection", "");
  }
  if (sessionStorage.getItem("previousSection") == ".main-section") {
    document.querySelector(
      `${sessionStorage.getItem("nowSection")}`
    ).style.display = "none";
    mainSection.style.display = "flex";
    sessionStorage.setItem("previousSection", "");
    sessionStorage.setItem("nowSection", ".main-section");
    if (document.querySelector(".plans-section")) {
      document.querySelector(".plans-section").remove();
    }
  } else if (
    sessionStorage.getItem("previousSection") == ".allExercise-section"
  ) {
    document.querySelector(
      `${sessionStorage.getItem("nowSection")}`
    ).style.display = "none";
    document.querySelector(".allExercise-section").style.display = "flex";
    sessionStorage.setItem("previousSection", "");
    sessionStorage.setItem("nowSection", ".allExercise-section");
    if (document.querySelector(".plans-section")) {
      document.querySelector(".plans-section").remove();
    }
  } else {
    if (document.querySelector(".plans-section")) {
      document.querySelector(".plans-section").remove();
    }
    mainSection.style.display = "none";
    document.querySelector(".allPLans-section").style.display = "flex";
    sessionStorage.setItem("nowSection", ".allPLans-section");
  }
}

function goToPlanAtProfile() {
  if (localStorage.getItem("page") != "mainPage") {
    console.log("asd");
  }
  profileSection.style.display = "none";
  document.querySelector(".allPLans-section").style.display = "flex";
}

function goToAllExercise() {
  document.querySelector(
    `${sessionStorage.getItem("nowSection")}`
  ).style.display = "none";
  document.querySelector(".allExercise-section").style.display = "flex";
  sessionStorage.setItem("nowSection", ".allExercise-section");
}

function renderExercisePlan() {
  let arrs = [];
  exercisesList.forEach((el) => {
    el.exercise.forEach((el) => {
      arrs.push(el.id);
    });
    let card = document.createElement("div");
    card.classList.add("exercise");
    card.setAttribute("data-musclesId", el.musclesId);
    card.setAttribute("data-ids", `[${arrs}]`);
    card.innerHTML = `
        <div>
          <p class="exercise__title">${el.bodyPart}</p>
        </div>
    `;
    card.style.backgroundImage = `url(${el.imgURL})`;
    arrs = [];
    document.querySelector(".allExercise-section__wrapper").append(card);
  });
}

renderExercisePlan();

function goToExericePlan() {
  document.querySelector(sessionStorage.getItem("nowSection")).style.display =
    "none";
  sessionStorage.setItem("nowSection", ".plans-section");
}

let exericeCard = document.querySelectorAll(".exercise");

exericeCard.forEach((card) => {
  card.addEventListener("click", (event) => {
    sessionStorage.setItem(
      "previousSection",
      sessionStorage.getItem("nowSection")
    );
    let clickCard = event.currentTarget;
    let dataIdsElem = clickCard.getAttribute("data-ids");
    let planId = event.currentTarget.getAttribute("data-musclesid");
    let workoutPlanForId = exercisesList.find(
      (plan) => plan.musclesId == planId
    );
    let dataIds = JSON.parse(dataIdsElem);
    goToExericePlan();

    console.log(dataIds);
    console.log(workoutPlanForId.bodyPart);

    // Функция для создания HTML для упражнения
    function createExerciseHTML(exercise) {
      return `
        <div class="plans-section__exercise-wrapper">
          <img src="img/exercise_menu.png" alt="" width="32px" height="32px" class="exerciseInfo" data-ids="${exercise.id}" onclick="goToInfoExercise(event)"/>
          <div class="plans-section__exercise-right">
            <img src="${exercise.imgURL}" alt="" onerror="this.src='img/undefinded.jpg';" width="80px" height="60px" style="background-color: #c2d076;"/>
            <div>
              <p class="plans-section__exercise-title">${exercise.name}</p>
              <p class="plans-section__exercise-text">x${exercise.repetitions}</p>
            </div>
          </div>
        </div>
      `;
    }

    // Функция для создания новой секции с упражнениями // УПРАЖНЕНИЯ
    function createExerciseSection(dataIds, workoutPlanForId) {
      const newSection = document.createElement("section");
      newSection.classList.add("plans-section");

      newSection.innerHTML = `
        <div class="plans-section__title-wrapper">
          <img src="img/back(white).svg" alt="" class="backWhite" onclick="goToAllPlans()" />
          <p class="plans-section__title">${workoutPlanForId.bodyPart}</p>
        </div>
        <div class="plans-section__info">
          <div class="create-line"></div>
          <p class="plans-section__time">${dataIds.length * 4} минут • ${
        dataIds.length
      } упражнений</p>
        </div>
        <div class="plans-section__exercise"></div>
        <footer class="plans-section__footer footer">
          <img src="img/customize.png" alt="">
          <button class="btnStart">Начать</button>
        </footer>
      `;

      const exercisesHTML = [];

      // Поиск упражнений и создание HTML
      dataIds.forEach((id) => {
        for (const group of exercisesList) {
          const foundExercise = group.exercise.find((ex) => ex.id === id);
          if (foundExercise) {
            exercisesHTML.push(createExerciseHTML(foundExercise));
            break; // Прерываем цикл после нахождения упражнения
          }
        }
      });

      // Добавляем упражнения в новую секцию
      newSection.querySelector(".plans-section__exercise").innerHTML =
        exercisesHTML.join("");

      if (document.querySelector(".plans-section")) {
        document.querySelector(".plans-section").remove();
      }
      document.body.appendChild(newSection);
      document.querySelector(".plans-section").style.display = "flex";
      // Или выберите другой контейнер для добавления
    }

    // Создаем секцию с упражнениями
    createExerciseSection(dataIds, workoutPlanForId);
  });
});

//
// MENU
//

function goToMain() {
  document.querySelector(
    `${sessionStorage.getItem("nowSection")}`
  ).style.display = "none";
  mainSection.style.display = "flex";
  sessionStorage.setItem("nowSection", ".main-section");
  document.querySelectorAll(".footer__btn-1")[0].style.backgroundImage =
    "url(img/menuActive.svg)";
  document.querySelectorAll(".footer__btn-2")[0].style.backgroundImage =
    "url(img/status.svg)";
  document.querySelectorAll(".footer__btn-3")[0].style.backgroundImage =
    "url(img/profile.svg)";
}

function goToStatus() {
  document.querySelector(
    `${sessionStorage.getItem("nowSection")}`
  ).style.display = "none";
  statusSection.style.display = "flex";
  sessionStorage.setItem("nowSection", ".status-section");
  document.querySelectorAll(".footer__btn-1")[1].style.backgroundImage =
    "url(img/menu.svg)";
  document.querySelectorAll(".footer__btn-2")[1].style.backgroundImage =
    "url(img/statusActive.svg)";
  document.querySelectorAll(".footer__btn-3")[1].style.backgroundImage =
    "url(img/profile.svg)";
}

function goToProfile() {
  document.querySelector(
    `${sessionStorage.getItem("nowSection")}`
  ).style.display = "none";
  profileSection.style.display = "flex";
  sessionStorage.setItem("nowSection", ".profile-section");
  document.querySelectorAll(".footer__btn-1")[2].style.backgroundImage =
    "url(img/menu.svg)";
  document.querySelectorAll(".footer__btn-2")[2].style.backgroundImage =
    "url(img/status.svg)";
  document.querySelectorAll(".footer__btn-3")[2].style.backgroundImage =
    "url(img/profileActive.svg)";
}

let workoutPlans = [
  {
    id: 1,
    exercise: "[1,5,4,7,42,45]",
    title: "Low Workout",
    description: "Тренировка низкой интенсивности",
    trainerName: "Андрей",
    duration: "15 мин",
    calories: "250 ККал",
    imageUrl: {
      duration: "img/time.svg",
      calories: "img/kall.svg",
      background: "img/plan-1.png",
    },
    onClickFunction: goToPlan,
  },
  {
    id: 2,
    exercise: "[2,46,32,45,22]",
    title: "Medium Workout",
    description: "Средняя тренировка всего тела",
    duration: "30 мин",
    calories: "350 ККал",
    imageUrl: {
      duration: "img/time.svg",
      calories: "img/kall.svg",
      background: "img/plan-2.png",
    },
    onClickFunction: goToPlan,
  },
  {
    id: 3,
    exercise: "[4,3,5,32,45]",
    title: "High Intensity Workout",
    description: "Высокоинтенсивная тренировка",
    duration: "45 мин",
    calories: "550 ККал",
    imageUrl: {
      duration: "img/time.svg",
      calories: "img/kall.svg",
      background: "img/plan-3.jpg",
    },
    onClickFunction: goToPlan,
  },
];

function createCard(plan) {
  let card = document.createElement("div");
  card.className = "plan-card";
  card.id = `plan-${plan.id}`;
  card.setAttribute("data-id", plan.id);
  card.setAttribute("data-ids", plan.exercise);
  card.onclick = goToPlan;

  card.innerHTML = `
      <div>
          <p class="plan-card__title">${plan.title}</p>
          <p class="plan-card__text">${plan.description}</p>
      </div>
      <div class="plan-card__btn-wrapper">
          <button class="plan-card__btn">
              <img src="${
                plan.imageUrl.duration
              }" alt="" class="plan-card__btn-img">${
    JSON.parse(plan.exercise).length * 4
  } мин
          </button>
          <button class="plan-card__btn">
              <img src="${
                plan.imageUrl.calories
              }" alt="" class="plan-card__btn-img">${plan.calories}
          </button>
      </div>
  `;

  return card;
}

function renderCards(plans) {
  let container = document.querySelector(".allPLans-section__wrapper"); // Предполагается, что у вас есть контейнер с таким ID
  plans.forEach((plan) => {
    let card = createCard(plan);
    container.appendChild(card);
  });
}

renderCards(workoutPlans);

function generateExerciseList(event) {
  let planId = event.currentTarget.getAttribute("data-id");
  console.log("Вы нажали на карточку с ID:", planId);
}

document
  .querySelector(".profile-section__exit")
  .addEventListener("click", () => {
    sessionStorage.removeItem("userEmail");
    location.reload();
  });

let planCard = document.querySelectorAll(".plan-card");
console.log(planCard);

planCard.forEach((card) => {
  card.addEventListener("click", (event) => {
    let clickCard = event.currentTarget;
    let dataIdsElem = clickCard.getAttribute("data-ids");
    let planId = event.currentTarget.getAttribute("data-id");
    console.log(planId);
    let workoutPlanForId = workoutPlans.find((plan) => plan.id == planId);
    console.log(dataIdsElem);
    let dataIds = JSON.parse(dataIdsElem);

    console.log(dataIds);
    console.log(workoutPlanForId);

    // Функция для создания HTML для упражнения
    function createExerciseHTML(exercise) {
      return `
        <div class="plans-section__exercise-wrapper">
          <img src="img/exercise_menu.png" alt="" width="32px" height="32px" class="exerciseInfo" data-ids="${exercise.id}" onclick="goToInfoExercise(event)"/>
          <div class="plans-section__exercise-right">
            <img src="${exercise.imgURL}" alt="" onerror="this.src='img/undefinded.jpg';" width="80px" height="60px" style="background-color: #c2d076;"/>
            <div>
              <p class="plans-section__exercise-title">${exercise.name}</p>
              <p class="plans-section__exercise-text">x${exercise.repetitions}</p>
            </div>
          </div>
        </div>
      `;
    }

    // Функция для создания новой секции с упражнениями // ПЛАН
    function createExerciseSection(dataIds, workoutPlanForId) {
      const newSection = document.createElement("section");
      newSection.classList.add("plans-section", "mediumPlan");

      newSection.innerHTML = `
        <div class="plans-section__title-wrapper">
          <img src="img/back(white).svg" alt="" class="backWhite" onclick="goToAllPlans()" />
          <p class="plans-section__title">${workoutPlanForId.title}</p>
        </div>
        <div class="plans-section__info">
          <div class="create-line"></div>
          <p class="plans-section__time">${dataIds.length * 4} минут • ${
        dataIds.length
      } упражнений</p>
        </div>
        <div class="plans-section__exercise"></div>
        <footer class="plans-section__footer footer">
          <img src="img/customize.png" alt="">
          <button class="btnStart">Начать</button>
        </footer>
      `;

      const exercisesHTML = [];

      // Поиск упражнений и создание HTML
      dataIds.forEach((id) => {
        for (const group of exercisesList) {
          const foundExercise = group.exercise.find((ex) => ex.id === id);
          if (foundExercise) {
            exercisesHTML.push(createExerciseHTML(foundExercise));
            break; // Прерываем цикл после нахождения упражнения
          }
        }
      });

      // Добавляем упражнения в новую секцию
      newSection.querySelector(".plans-section__exercise").innerHTML =
        exercisesHTML.join("");

      if (document.querySelector(".plans-section")) {
        document.querySelector(".plans-section").remove();
      }
      document.body.appendChild(newSection);
      document.querySelector(".plans-section").style.display = "flex";
      // Или выберите другой контейнер для добавления
    }

    // Создаем секцию с упражнениями
    createExerciseSection(dataIds, workoutPlanForId);
  });
});

//
// Информация о упражнении
//

function goToInfoExercise(event) {
  let clickCard = event.currentTarget;
  let dataIdsElem = clickCard.getAttribute("data-ids");
  let infoCard = getExerciseById(dataIdsElem);
  renderInfoExercise(infoCard);
  console.log(infoCard);
}

function getExerciseById(id) {
  for (let muscleGroup of exercisesList) {
    for (let exercise of muscleGroup.exercise) {
      if (exercise.id == id) {
        return exercise;
      }
    }
  }
  return null; // Если упражнение не найдено
}

function renderInfoExercise(info) {
  document.querySelector(".plans-section").style.display = "none";
  sessionStorage.setItem("nowSection", ".exerciseInfo-section");
  let card = document.createElement("section");
  card.classList.add("exerciseInfo-section");
  card.innerHTML = `
      <div class="exerciseInfo-section__img">
        <img src="${info.imgURL}" onerror="this.src='img/undefinded.jpg';" alt="" height="200px">
      </div>
      <div class="exerciseInfo-section__wrapper">
        <p class="exerciseInfo-section__title">${info.name}</p>
        <p class="exerciseInfo-section__text">${info.description}</p>
      </div>
      <button class="btnInfo btnTwo" onclick='backToPlan()'>Вернутся к плану тренировки</button>`;
  document.body.append(card);
}

