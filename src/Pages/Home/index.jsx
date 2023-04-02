import { PageMain } from "../../Components/PageMain";

export default function Home() {
    const lang = localStorage.getItem('lang');
    const textContent = {};
    switch (lang) {
        case 'en':
            textContent.heading = "SEARCH FOR CHEAP AIR TICKETS AND TRAVEL INSURANCE"
            textContent.headingDescription = "An easy way to buy air tickets and a cheap policy, the policy is valid all over the world"
            textContent.formHeading = "Where are you flying?"
            textContent.formDescription = "We know the best places in different cities and will show you everything!"
            break
        case 'ru':
        default:
            textContent.heading = "ПОИСК ДЕШЁВЫХ АВИАБИЛЕТОВ И СТРАХОВАНИЕ ПУТЕШЕСТВЕННИКОВ"
            textContent.headingDescription = "Лёгкий способ купить авиабилеты и полис дёшево, полис действителен во всем мире"
            textContent.formHeading = "Куда летите?"
            textContent.formDescription = "Мы знаем лучшие места в разных городах и покажем вам все!"
    }
    return (
        <PageMain>
            
        </PageMain>
    )
}