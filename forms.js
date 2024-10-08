export const forms = {
  Basic: {
    inpol: {
      id: "inpol",
      fieldName: "inpol",
      type: "number",
      className: "onlyDigits",
      labelName: "Номер внеска на inPol",
      placeholder: "00641410",
      maxlength: 8,
      minlength: 8,
      required: true,
      inputHelper: "Находится на заполненом внеске рядом со штрих кодом",
    },
    mos: {
      id: "mos",
      fieldName: "mos",
      type: "number",
      className: "onlyDigits",
      labelName: "Номер внеска на MOS",
      placeholder: "42354528",
      maxlength: 8,
      minlength: 8,
      required: true,
      inputHelper: "Находится на заполненом внеске рядом со штрих кодом",
    },
    name: {
      id: "name",
      fieldName: "name",
      type: "text",
      className: "onlyText",
      labelName: "Имя",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    surname: {
      id: "surname",
      fieldName: "surname",
      type: "text",
      className: "onlyText",
      labelName: "Фамилия",
      placeholder: "Rzayev",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    nationality: {
      id: "nationality",
      fieldName: "nationality",
      type: "text",
      className: "onlyText",
      labelName: "Гражданство",
      placeholder: "Poland",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    birthday: {
      id: "birthday",
      fieldName: "birthday",
      type: "date",
      className: "date",
      labelName: "Дата рождения",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    passport: {
      id: "passport",
      fieldName: "passport",
      type: "text",
      className: "passport",
      labelName: "Номер паспорта",
      placeholder: "FA8243943",
      maxlength: 9,
      minlength: 9,
      required: true,
      inputHelper: "Вверху в правом  углу на первой странице",
    },
    phone: {
      id: "phone",
      fieldName: "phone",
      type: "text",
      className: "phone",
      labelName: "Номер телефона",
      placeholder: "+48579137807",
      maxlength: 16,
      minlength: 10,
      required: true,
      inputHelper: "Для связи с нами",
    },
    email: {
      id: "email",
      fieldName: "email",
      type: "text",
      className: "email",
      labelName: "Электронная почта",
      placeholder: "adres@gmail.com",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Для получения точной даты регистрации и фактуры для оплаты",
    },
    source: {
      id: "source",
      fieldName: "source",
      type: "textarea",
      className: "textarea",
      labelName: "Как о нас узнали",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
  },
  Ultra: {
    name: {
      id: "name",
      fieldName: "name",
      type: "text",
      className: "onlyText",
      labelName: "Имя",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    surname: {
      id: "surname",
      fieldName: "surname",
      type: "text",
      className: "onlyText",
      labelName: "Фамилия",
      placeholder: "Rzayev",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    nationality: {
      id: "nationality",
      fieldName: "nationality",
      type: "text",
      className: "onlyText",
      labelName: "Гражданство",
      placeholder: "Poland",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    birthday: {
      id: "birthday",
      fieldName: "birthday",
      type: "date",
      className: "date",
      labelName: "Дата рождения",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: false,
      inputHelper: "",
    },
    passport: {
      id: "passport",
      fieldName: "passport",
      type: "text",
      className: "passport",
      labelName: "Номер паспорта",
      placeholder: "FA8243943",
      maxlength: 9,
      minlength: 9,
      required: false,
      inputHelper: "Вверху в правом  углу на первой странице",
    },
    phone: {
      id: "phone",
      fieldName: "phone",
      type: "text",
      className: "phone",
      labelName: "Номер телефона",
      placeholder: "+48579137807",
      maxlength: 16,
      minlength: 10,
      required: true,
      inputHelper: "Для связи с нами",
    },
    email: {
      id: "email",
      fieldName: "email",
      type: "text",
      className: "email",
      labelName: "Электронная почта",
      placeholder: "adres@gmail.com",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Для получения точной даты регистрации и фактуры для оплаты",
    },
    source: {
      id: "source",
      fieldName: "source",
      type: "textarea",
      className: "textarea",
      labelName: "Как о нас узнали",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
  },
  Others: {
    name: {
      id: "name",
      fieldName: "name",
      type: "text",
      className: "onlyText",
      labelName: "Имя",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    surname: {
      id: "surname",
      fieldName: "surname",
      type: "text",
      className: "onlyText",
      labelName: "Фамилия",
      placeholder: "Rzayev",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    phone: {
      id: "phone",
      fieldName: "phone",
      type: "text",
      className: "phone",
      labelName: "Номер телефона",
      placeholder: "+48579137807",
      maxlength: 16,
      minlength: 10,
      required: true,
      inputHelper: "Для связи с нами",
    },
    email: {
      id: "email",
      fieldName: "email",
      type: "text",
      className: "email",
      labelName: "Электронная почта",
      placeholder: "adres@gmail.com",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Для получения точной даты регистрации и фактуры для оплаты",
    },
    interests: {
      id: "interests",
      fieldName: "interests",
      type: "textarea",
      className: "textarea",
      labelName: "В нескольких словах опишите что конкретно вас интересует",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
    source: {
      id: "source",
      fieldName: "source",
      type: "textarea",
      className: "textarea",
      labelName: "Как о нас узнали",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
  },
  Advanced: {
    surname: {
      id: "surname",
      fieldName: "surname",
      type: "text",
      className: "onlyText",
      labelName: "Фамилия",
      placeholder: "Rzayev",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    familySurname: {
      id: "familySurname",
      fieldName: "familySurname",
      type: "text",
      className: "onlyText",
      labelName: "Родовая фамилия",
      placeholder: "Rzayev",
      maxlength: 32,
      minlength: 2,
      required: false,
      inputHelper: "(Латинскими буквами)",
    },
    name: {
      id: "name",
      fieldName: "name",
      type: "text",
      className: "onlyText",
      labelName: "Имя",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    previousName: {
      id: "previousName",
      fieldName: "previousName",
      type: "text",
      className: "onlyAllText",
      labelName: "Предыдущие имена",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: false,
      inputHelper: "",
    },
    fatherName: {
      id: "fatherName",
      fieldName: "fatherName",
      type: "text",
      className: "onlyAllText",
      labelName: "Имя отца",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    motherName: {
      id: "motherName",
      fieldName: "motherName",
      type: "text",
      className: "onlyAllText",
      labelName: "Имя матери",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    familyMotherSurname: {
      id: "familyMotherSurname",
      fieldName: "familyMotherSurname",
      type: "text",
      className: "onlyAllText",
      labelName: "Девичья фамилия матери",
      placeholder: "Alexey",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    birthday: {
      id: "birthday",
      fieldName: "birthday",
      type: "date",
      className: "date",
      labelName: "Дата рождения",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    gender: {
      id: "gender",
      fieldName: "gender",
      type: "text",
      className: "onlyAllText",
      labelName: "Пол",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Например: Мужской, Женский, Другой",
    },
    motherCity: {
      id: "motherCity",
      fieldName: "motherCity",
      type: "text",
      className: "onlyAllText",
      labelName: "Город рождения",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    motherCountry: {
      id: "motherCountry",
      fieldName: "motherCountry",
      type: "text",
      className: "onlyAllText",
      labelName: "Страна рождения",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    nationality: {
      id: "nationality",
      fieldName: "nationality",
      type: "text",
      className: "onlyText",
      labelName: "Гражданство",
      placeholder: "Poland",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Как в загранпаспорте (Латинскими буквами)",
    },
    familyStatus: {
      id: "familyStatus",
      fieldName: "familyStatus",
      type: "text",
      className: "onlyAllText",
      labelName: "Семейное положение",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    education: {
      id: "education",
      fieldName: "education",
      type: "text",
      className: "onlyAllText",
      labelName: "Образование",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    height: {
      id: "height",
      fieldName: "height",
      type: "text",
      className: "onlyDigits",
      labelName: "Рост",
      placeholder: "",
      maxlength: 3,
      minlength: 2,
      required: true,
      inputHelper: "Рост в сантиметрах",
    },
    eyeColor: {
      id: "eyeColor",
      fieldName: "eyeColor",
      type: "text",
      className: "onlyAllText",
      labelName: "Цвет глаз",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    specialSigns: {
      id: "specialSigns",
      fieldName: "specialSigns",
      type: "text",
      className: "onlyAllText",
      labelName: "Особые приметы",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: false,
      inputHelper: "Если имеются. Например: татуировки, шрамы",
    },
    peselNum: {
      id: "peselNum",
      fieldName: "peselNum",
      type: "text",
      className: "onlyDigits",
      labelName: "Номер песеля",
      placeholder: "",
      maxlength: 11,
      minlength: 11,
      required: false,
      inputHelper: "",
    },
    phone: {
      id: "phone",
      fieldName: "phone",
      type: "text",
      className: "phone",
      labelName: "Номер телефона",
      placeholder: "+48579137807",
      maxlength: 16,
      minlength: 10,
      required: true,
      inputHelper: "Для связи с нами",
    },
    email: {
      id: "email",
      fieldName: "email",
      type: "text",
      className: "email",
      labelName: "Электронная почта",
      placeholder: "adres@gmail.com",
      maxlength: 32,
      minlength: 2,
      required: true,
      inputHelper: "Для получения точной даты регистрации и фактуры для оплаты",
    },
    address: {
      id: "address",
      fieldName: "address",
      type: "text",
      className: "",
      labelName: "Адрес проживания в Польше",
      placeholder: "",
      maxlength: 64,
      minlength: 2,
      required: false,
      inputHelper: "Eсли имеется",
    },
    reasonOfResidence: {
      id: "reasonOfResidence",
      fieldName: "reasonOfResidence",
      type: "text",
      className: "onlyAllText",
      labelName: "На каком основании хотите получить карту побыту",
      placeholder: "",
      maxlength: 64,
      minlength: 2,
      required: false,
      inputHelper: "Работа/учета/воссоедение с семьей и т.д.",
    },
    familyInfo: {
      id: "familyInfo",
      fieldName: "familyInfo",
      type: "textarea",
      className: "textarea",
      labelName:
        "Данные членов вашей семьи, которые проживают на територии Польши (имена, фамилии, даты рождения, город проживания в Польше, кем вам приходятся, делают ли они себе карту побыту на данный момент, находятся ли они на вашем содержании)",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
    firstEnteranceDate: {
      id: "firstEnteranceDate",
      fieldName: "firstEnteranceDate",
      type: "date",
      className: "date",
      labelName: "Дата первого вьезда на територию Польши",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: false,
      inputHelper: "",
    },
    lastEnteranceDate: {
      id: "lastEnteranceDate",
      fieldName: "lastEnteranceDate",
      type: "date",
      className: "date",
      labelName: "Дата последнего вьезда на територию Польши",
      placeholder: "",
      maxlength: 32,
      minlength: 2,
      required: false,
      inputHelper: "",
    },
    reasonOfEnterance: {
      id: "reasonOfEnterance",
      fieldName: "reasonOfEnterance",
      type: "text",
      className: "onlyAllText",
      labelName: "На каком основании вы заехали в Польшу",
      placeholder: "",
      maxlength: 64,
      minlength: 2,
      required: false,
      inputHelper: "Виза, биометрия и т.д.",
    },
    countriesVisitHistory: {
      id: "reasonOfEnterance",
      fieldName: "reasonOfEnterance",
      type: "textarea",
      className: "textarea",
      labelName: "Страны в которых вы были последние 5 лет",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
    income: {
      id: "income",
      fieldName: "income",
      type: "text",
      className: "",
      labelName: "Имеется ли у вас официальный доход в Польше",
      placeholder: "",
      maxlength: 64,
      minlength: 2,
      required: true,
      inputHelper: "",
    },
    passport: {
      id: "passport",
      fieldName: "passport",
      type: "text",
      className: "passport",
      labelName: "Номер паспорта",
      placeholder: "FA8243943",
      maxlength: 9,
      minlength: 9,
      required: true,
      inputHelper: "Вверху в правом  углу на первой странице",
    },
    source: {
      id: "source",
      fieldName: "source",
      type: "textarea",
      className: "textarea",
      labelName: "Как о нас узнали",
      placeholder: "",
      maxlength: 1000,
      minlength: 0,
      required: false,
      inputHelper: "",
    },
  },
};
