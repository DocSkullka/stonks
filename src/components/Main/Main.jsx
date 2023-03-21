import { BackgroundLights } from "./BackgroungLights/BackgroundLights"
import { InputStock } from "./InputStock/InputStock"
import { Slogan } from "./Slogan/Slogan"
import { StockTable } from "./StockTable/StockTable"
import { useSelector } from "react-redux"


export const Main = () => {
    const popupFlag = useSelector((state) => { return state.user.popupFlag})
    return(
        <main>
            <Slogan />
            <StockTable />
            {/* <InputStock /> */}
            {popupFlag && <InputStock />}
            <BackgroundLights />
        </main>
    )
}