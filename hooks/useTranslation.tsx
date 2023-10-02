import * as languages from "../utils/lang";
import { ITranslationProvider, Language } from "../models";
import { useRouter } from "next/router";
import { useContext, ReactNode, createContext } from "react";

export const TranslationContext = createContext({});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const { locale } = useRouter();

  const translate = (scope: string) => {
    return languages[locale as Language]?.[scope];
  };

  return (
    <TranslationContext.Provider value={{ locale, t: translate, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () =>
  useContext(TranslationContext) as ITranslationProvider;
