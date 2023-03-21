import { AboutCompany } from "./AboutCompany/AboutCompany"
import { FooterContacts } from "./FooterContacts/FooterContacts"
import { Menu } from "./Menu/Menu"


export const Footer = () => {
    return (
        <footer>
            <AboutCompany />
            <Menu />
            <FooterContacts />
        </footer>
    )
}