import React, { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState("en");

    const getLangFromURL = () => {
        const path = window.location.pathname;
        const lang = path.split("/").pop();
        return ["en", "ru", "kg"].includes(lang) ? lang : "en";
    };

    useEffect(() => {
        const lang = getLangFromURL();
        setCurrentLang(lang);
    }, [window.location.pathname]);

    return (
        <LangContext.Provider value={{ currentLang, setCurrentLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLanguage = () => useContext(LangContext);
