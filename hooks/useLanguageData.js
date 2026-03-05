import { useTranslation } from "react-i18next";
import featureCardsData from "../data/Home/featureCardsData";
import goalsData from "../data/Home/goalsData";
import opportunitiesCardsData from "../data/Home/opportunitiesCardsData";
import schoolCardsData from "../data/Home/schoolCardsData";
import ceramicsCardsData from "../data/Home/ceramicsCardsData";
import contactSectionData from "../data/Home/contactSectionData";
import impactNumbersData from "../data/About/impactNumbersData";
import processCardsData from "../data/About/processCardsData";
import schoolData from "../data/About/schoolData";
import successCardsData from "../data/Guide/successCardsData";
import skillsCardsData from "../data/Guide/skillsCardsData";
import benefitsCardsData from "../data/Guide/benefitsCardsData";
import stepsCardsData from "../data/Guide/stepsCardsData";
import familyCardsData from "../data/Guide/familyCardsData";
import munCardsData from "../data/Guide/munCardsData";
import workshopData from "../data/Workshops/workshopData";

export const useLanguageData = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Fallback to English if language data doesn't exist
  const getData = (dataObject) => {
    return dataObject[currentLanguage] || dataObject.en;
  };

  return {
    featureCardsData: getData(featureCardsData),
    goalsData: getData(goalsData),
    opportunitiesCardsData: getData(opportunitiesCardsData),
    schoolCardsData: getData(schoolCardsData),
    ceramicsCardsData: getData(ceramicsCardsData),
    contactSectionData: getData(contactSectionData),
    processCardsData: getData(processCardsData),
    impactNumbersData: getData(impactNumbersData),
    schoolData: getData(schoolData),
    successCardsData: getData(successCardsData),
    skillsCardsData: getData(skillsCardsData),
    benefitsCardsData: getData(benefitsCardsData),
    stepsCardsData: getData(stepsCardsData),
    familyCardsData: getData(familyCardsData),
    munCardsData: getData(munCardsData),
    workshopData: getData(workshopData),
  };
};
