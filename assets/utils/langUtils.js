const langUtils = (() => {
  let langArray = [
    { lang: 'zh-CN', title: '简体中文' },
    { lang: 'zh-TW', title: '繁体中文' },
    { lang: 'en-US', title: 'English' }
  ];
  let currentLang =
    localStorage.getItem('et_lang') || navigator.languages[0] || navigator.language[0] || 'zh-CN';
  return {
    getLangArray: () => {
      return langArray;
    },
    getCurrentLang: () => {
      return currentLang;
    },
    changeCurrentLang: (lang) => {
      if (lang != currentLang) {
        localStorage.setItem('et_lang', lang);
        window.location.reload();
      }
    },
    getLangTitle: (lang) => {
      let title = '';
      lang = lang == null ? currentLang : lang;
      for (let i in langArray) {
        if (langArray[i].lang == lang) {
          title = langArray[i].title;
          break;
        }
      }
      return title;
    }
  };
})();

export default langUtils;
