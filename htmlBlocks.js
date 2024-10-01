export const SERVICE = {
  BASIC: "Basic",
  ADVANCED: "Advanced",
  ULTRA: "Ultra",
  OTHERS: "Others",
};

export const HtmlBlocks = {
  getServiceName: (serviceType) => {
    return new Object({
      [SERVICE.BASIC]: "Временный побыт<br>Только запись",
      [SERVICE.ADVANCED]: "Временный побыт<br>Запись и Заполнение внесков",
      [SERVICE.ULTRA]: "Временный побыт<br>Полное сопровождение вашего дела",
      [SERVICE.OTHERS]: "Другие услуги",
    })[serviceType];
  },
  getServiceDescription: (serviceType) => {
    return new Object({
      [SERVICE.BASIC]: `Оплата осуществляется только после получения точной даты регистрации - не позднея чем следующая пятница целью записи вас на подачу документов на временный побыт в Варшаве просим вас ответить на несколько вопросов.`,
      [SERVICE.ADVANCED]: `Что такое внески - для регистрации на временный побыт требуются номера inPol и MOS. <br>Если у вас их нет или вы этого не знаете, мы вам поможем<br>Оплата осуществляется только после получения точной даты регистрации - не позднея чем следующая пятница целью заполнения внесков и записи вас на подачу документов на временный побыт в Варшаве просим вас ответить на несколько вопросов.`,
      [SERVICE.ULTRA]: `Полное сопровождение, помощь во всех вопросах и на всех этапах <br>Чтобы наши специалисты могли лучше разобратся в вашем случае и определить для вас оптимальную цену - просьба оставить свои контактные данные отвечая на вопросы внизу. Наши специалисты связутся с вами в течении 15 минут.`,
      [SERVICE.OTHERS]: `Стоимость зависит от конкретной услуги.<br>Примеры дополнительных услуг: <br>- Открытие/Закрытие компании <br> - Получение номера Песель в удаленном режиме <br> - Замена водительских прав<br> - Регистрация автомобиля <br> - Апелляция и возврат средств и т.д. и т.п.`,
    })[serviceType];
  },
  getServicePrize: (serviceType) => {
    return new Object({
      [SERVICE.BASIC]: "50 zł",
      [SERVICE.ADVANCED]: "100 zł",
      [SERVICE.ULTRA]: "1500 zł",
      [SERVICE.OTHERS]: "",
    })[serviceType];
  },
  getHomePageHeader: () => {
    return `
      <header>
        <div id="homePageHeader">
            <label id="headerHomeLbl">Наши услуги</label>
        </div>
      </header>
    `;
  },
  getServiceBlock: (serviceKey, serviceType) => {
    const serviceName = HtmlBlocks.getServiceName(serviceType);
    const serviceDescription = HtmlBlocks.getServiceDescription(serviceType);
    const servicePrize = HtmlBlocks.getServicePrize(serviceType);

    return `
      <div class="serviceBtns" service-name="${serviceKey}">
          <span class="serviceName">${serviceName}</span>
          <span class="serviceDescription">${serviceDescription}</span>
          <span class="servicePrice">${servicePrize}</span>
      </div>
    `;
  },
  getHomePageMain: () => {
    return `
      <main>
        <div id="servicesBlock">
          ${Object.entries(SERVICE).reduce(
            (servicesBlock, [serviceKey, serviceType]) =>
              servicesBlock +
              HtmlBlocks.getServiceBlock(serviceKey, serviceType),
            ""
          )}
        </div>
      </main>
    `;
  },
  getHomePageFooter: () => {
    return `
      <footer id="contactFooter">
          <div class="footerContent">
              <div class="contactInfo">
                  <button id="openChatWithUsBtn">Открыть чат с нами в Телеграм</button>
              </div>
            <div class="contactInfo">
              <p>Наша почта: kontaktkartapobytu@gmail.com</p>
            </div>
          </div>
      </footer>
    `;
  },
  getHomePage: () => {
    return `<div id="homePage"></div>`;
  },
  getFormInput: (params) => {
    const {
      id,
      fieldName,
      type,
      className,
      labelName,
      placeholder,
      maxlength,
      minlength,
      required,
      inputHelper,
    } = params;
    return `
      <div class="inputWrapper">
        <label for="customInput" class="inputLabel">${labelName}:</label>
        ${required ? ` <label class="reuiresStart">*</label>` : ""}
          ${
            type == "textarea"
              ? `<textarea type="${type}" id="${id}" class="inputField ${className}" fieldName="${fieldName}"
            minlength="${minlength}" maxlength="${maxlength}" placeholder="${placeholder}"
            ${required ? "required" : ""}></textarea>`
              : `<input type="${type}" id="${id}" class="inputField ${className}" fieldName="${fieldName}"
            minlength="${minlength}" maxlength="${maxlength}" placeholder="${placeholder}" 
            ${required ? "required" : ""}/>`
          }
        <small class="inputHelper">${inputHelper}</small>
        <span class="error inputError">Invalid input. Please check and try again.</span>
      </div>
    `;
  },
  getSubmit: () => {
    return `
      <label id="submitErrorLbl">The form cannot be submitted with invalid data</label>
      <button id="submitBtn">Отправить</button>
    `;
  },
  getFormHeader: (serviceType) => {
    const serviceName = HtmlBlocks.getServiceName(serviceType);
    const serviceDescription = HtmlBlocks.getServiceDescription(serviceType);

    return `
      <header>
        <div id="formPageHeader">
          <div class="iconLogotype"></div>
          <label id="formHeaderServiceNameLbl">${serviceName}</label>
          <label id="formHeaderExplanationLbl">${serviceDescription}</label>
          <div id="formHeaderBtnsBlock">
            <button id="formHeaderGoBackBtn">Выбрать другую услугу</button>
          </div>
        </div>
      </header>
    `;
  },
  getFormContainer: () => {
    return `<div id="formContainer"></div>`;
  },
  getSuccessMsgPage: (msg) => {
    return `
      <div id="successMsgPage">
          <div id="successMsgContainer">
              <label id="successMsgLbl">${msg}</label>
              <button id="updPagebtn">Обновить страинцу</button>
          </div>
      </div>
    `;
  },
  getDefaultSuccessMessage: () => {
    return `Спасибо! <br>Ваш заказ принят, дата записи будет известна не позднее следующей пятницы. Данные подачи будут отправлены  вам на ваш адрес имейл вместе с фактурой для оплаты.`;
  },
  getAdvancedSuccessMessage: () => {
    return `Спасибо!<br>Ваш заказ принят, дата записи будет известна не позднее следующей пятницы. Данные подачи будут отправлены  вам на ваш адрес имейл вместе с фактурой для оплаты.<br>Наши юристы свяжутся с вами в течении 15 минут.`;
  },
};
