import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
// import RU from '../translation/lang.ru.json'
// import EN from '../translation/lang.en.json'



i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en",
    // debug: true,
    resources: {
        en: {
            translation: {
                "text1": "How to use",
                "text2": "My porchases",
                "text3": "Apply to doctor",
                "text4": "Artyom Sviridov",
                "text5": "Online consultations from specialist doctors 24/7",
                "text6": "Consult now or by appointment on your computer or using our application, available in the App Store and Google Play",
                "text7": "Sign up",
                "text8": "How it works?",
                "text9": "To make an appointment with a doctor",
                "text10": "More than 1,500 doctors and more than 50 different specializations",
                "text11": "Sign up",
                "text12": "Sign up",
                "status": {
                    "cancelled": "postpened",
                    "future": "planned",
                    "past": "completed"
                }
            }
        },
        ru: {
            translation: {
                "text1": "Как пользоваться?",
                "text2": "Мои записи",
                "text3": "Записаться к врачу",
                "text4": "Артем Свиридов",
                "text5": "Онлайн консультации от врачей специалистов 24/7",
                "text6": "Проконсультируйтесь сейчас или по предварительной записи своего компьютера или c помощью нашего приложения,доступного в App Store и Google Play",
                "text7": "Записаться",
                "text8": "Как это работает?",
                "text9": "Записаться к врачу",
                "text10": "Более 1500 врачей и более 50 разных специализаций",
                "text11": "Записаться",
                "text12": "Записаться",
                "status": {
                    "cancelled": "Отмененные",
                    "future": "Предстоящие",
                    "past": "Прошедшие"
                }
            }
        }
    }

})
export default i18n;
