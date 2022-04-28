import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";

import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import NotFound from "./screens/NotFound";

import UiLanguage from "./components/funcComponents/ui/UiLanguage/UiLanguage";

//i18n import
import English from "./lang/en.json";
import Italian from "./lang/it.json";

function Routing() {
  const checkBrowserLang = () => {
    switch (navigator.language.substring(0, 2)) {
      case "it":
        return Italian;
      default:
        return English;
    }
  };
  const [lang, setLang] = useState({
    locale: navigator.language.substring(0, 2),
    translations: checkBrowserLang(),
  });

  const getLangChanges = (e) => {
    let supp;
    console.log(e);
    switch (e) {
      case "it":
        supp = Italian;
        break;
      default:
        supp = English;
        break;
    }
    setLang({ locale: e, translations: supp });
  };

  return (
    <>
      <UiLanguage currLang={lang.locale} callback={getLangChanges} />
      <IntlProvider
        locale={lang.locale}
        key={lang.locale}
        messages={lang.translations}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </IntlProvider>
    </>
  );
}

export default Routing;
