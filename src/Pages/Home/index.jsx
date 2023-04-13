import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import Banner from "../../Components/HomePage/Banner";
import Card from "../../Components/HomePage/Card";
import { PageMain } from "../../Components/PageMain";

export default function Home() {
    
    const { lang } = useParams();
    const textContent = {};
    switch (lang) {
        case 'en':
            document.title = 'Home Page | Jorney Land';
            textContent.heading = "SEARCH FOR CHEAP AIR TICKETS AND TRAVEL INSURANCE"
            textContent.headingDescription = "An easy way to buy air tickets and a cheap policy, the policy is valid all over the world"
            textContent.formHeading = "Where are you flying?"
            textContent.formDescription = "We know the best places in different cities and will show you everything!"
            break
        case 'ru':
        default:
            document.title = 'Главная | Jorney Land';
            textContent.heading = "ПОИСК ДЕШЁВЫХ АВИАБИЛЕТОВ И СТРАХОВАНИЕ ПУТЕШЕСТВЕННИКОВ"
            textContent.headingDescription = "Лёгкий способ купить авиабилеты и полис дёшево, полис действителен во всем мире"
            textContent.formHeading = "Куда летите?"
            textContent.formDescription = "Мы знаем лучшие места в разных городах и покажем вам все!"
    }
    return (
        <HomePageMain>
            <HomePageHeading>{textContent.heading}</HomePageHeading>
            <HomePageSubheading>{textContent.headingDescription}</HomePageSubheading>
            <Banner />
            <CardsContainer>
                {CardContent.map((item, index) => {
                    return (
                        <Card
                            key={Math.random().toString(36).substr(2, 9)}
                            heading={item[`${lang}Heading`]}
                            description={item[`${lang}Description`]}
                            image={item.image}
                            index={index} />
                    )
                })}
            </CardsContainer>
        </HomePageMain>
    )
}

const HomePageMain = styled(PageMain)`
    padding-top: 40px;

    @media screen and (max-width: 450px) {
        padding-top: 20px;
    }
`

const HomePageHeading = styled.h1`
    margin: 0 auto 5px;
    max-width: 900px;
    font-size: 42px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 1200px) {
        max-width: 700px;
        font-size: 36px;
        line-height: 42px;
    }

    @media screen and (max-width: 650px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media screen and (max-width: 450px) {
        margin: 0 15px 5px;
        font-size: 22px;
        line-height: 28px;
    }
`

const HomePageSubheading = styled.span`
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 16px;
        line-height: 18px;
    }

    @media screen and (max-width: 450px) {
        margin: 0 20px 5px;
        font-size: 14px;
        line-height: 18px;
    }
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    gap: 20px;

    // margin-top: 20px;
    margin: 20px auto;
    width: 820px;

    @media screen and (max-width: 1100px) {
        width: 700px;
    }
`

const CardContent = [
    {
        ruHeading: "Покрываем коронавирус",
        enHeading: "Covering the Coronavirus",
        ruDescription: "Все наши полисы покрывают лечение и диагностику в случае заражения COVID\u201119, ведь не все страны готовы лечить коронавирус за свой счет. Максимальное покрытие по медицинским расходам составит 100\u00A0000 USD/EUR. Также полисом предусмотрена компенсация по риску отмена поездки, если застрахованный заболеет COVID\u201119.",
        enDescription: "All our policies cover treatment and diagnostics in case of infection with COVID\u201119, because not all countries are ready to treat coronavirus at their own expense. The maximum coverage for medical expenses will be 100,000 USD/EUR. The policy also provides compensation for the risk of trip cancellation if the insured person falls ill with COVID\u201119.",
        image: "/images/card/covid.png"
    },
    {
        ruHeading: "Только проверенные клиники",
        enHeading: "Only verified clinics",
        ruDescription: "Мы контролируем качество работы медицинских учреждений с помощью Ваших рейтингов и отзывов на нашем сайте. Если мы получаем более 2-х негативных отзывов по клинике, то просто перестаем с ней работать. Таким образом, наших клиентов направляют только в проверенные клиники, где быстро оказывают квалифицированную медицинскую помощь.",
        enDescription: "We control the quality of work of medical institutions with the help of your ratings and reviews on our website. If we receive more than 2 negative reviews about the clinic, then we simply stop working with it. Thus, our clients are referred only to trusted clinics, where they quickly provide qualified medical care.",
        image: "/images/card/clinic.png"
    },
    {
        ruHeading: "Доктор онлайн 24/7",
        enHeading: "Doctor online 24/7",
        ruDescription: "Чтобы не тратить время на дорогу до клиники и ожидание врача. наши клиенты могут бесплатно получить онлайн-консультацию терапевта или педиатра в приложении на смартфоне. Эта опция включена во все страховки независимо от тарифа. Врач отвечает сразу же 24/7 в видео- или онлайн-чате. Нужно лишь установить наше приложение (iOS. Android).",
        enDescription: "In order not to waste time on the road to the clinic and waiting for the doctor. our clients can get free online advice from a therapist or pediatrician in the application on their smartphone. This option is included in all insurances regardless of the tariff. The doctor responds immediately 24/7 via video or online chat. You just need to install our application (iOS. Android).",
        image: "/images/card/doctor.png"
    },
    {
        ruHeading: "Страховое покрытие до 1\u00A0000\u00A0000 €",
        enHeading: "Insurance coverage up to 1,000,000 €",
        ruDescription: "Мы понимаем, что самое ценное - это здоровье. Поэтому предлагаем самое большое страховое покрытие на российском рынке - до 1\u00A0000\u00A0000 €. Мы ориентируемся на зарубежный опыт, для России это уникальное предложение. Такая страховая сумма покроет лечение серьезных травм, долгое восстановление в больнице и сложные операции.",
        enDescription: "We understand that the most valuable thing is health. Therefore, we offer the largest insurance coverage on the Russian market - up to 1,000,000 €. We focus on foreign experience, for Russia this is a unique offer. Such an insurance amount will cover the treatment of serious injuries, long hospital recovery and complex operations.",
        image: "/images/card/premium.png"
    },
    {
        ruHeading: "Помощь при обострении хронических заболеваний",
        enHeading: "Help with exacerbation of chronic diseases",
        ruDescription: "Сейчас даже у людей моложе 30 лет есть хронические заболевания, которые время от времени дают о себе знать. Не говоря уже о пожилых людях -для них помощь при обострении хронических заболеваний особенно важна. Поэтому мы предлагаем одно из самых больших покрытий на рынке по купированию обострений хронических заболеваний - до 3\u00A0000 S.",
        enDescription: "Now even people under 30 have chronic diseases that make themselves felt from time to time. Not to mention the elderly, for them help with exacerbation of chronic diseases is especially important. That's why we offer one of the largest coverages on the market for the treatment of exacerbations of chronic diseases - up to 3,000 S.",
        image: "/images/card/help.png"
    },
];