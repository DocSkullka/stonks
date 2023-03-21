import { Contacts } from './Contacts/Contacts'
import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'

export const Header = () => {
    return (
        <header>
            <Logo />
            <Navigation />
            <Contacts />
        </header>
    )
}