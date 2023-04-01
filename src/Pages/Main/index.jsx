import { AsideNavigationList, AviasalesList, LevelTravelList, MapsMeList, TripinsuranceList } from "../../Components/List";

export default function Main() {
    document.title = 'Главная | Jorney Land'
    return (
        <div>
            <LevelTravelList />
            <TripinsuranceList />
            <AviasalesList />
            <MapsMeList />
            <AsideNavigationList />
        </div>
    )
}