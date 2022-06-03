import './Header.css'
import logo from '../../assets/img/logo.svg'

const Header = ({ activeTab, setActiveTab }) => {

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    return (
        <div className="max-width header">
            <div className="header-logo">
                <a href="#">
                    <img src={logo} alt="logo" className="logo" />
                </a>
            </div>
            <div className="header-navbar-wrapper">
                <ul className="header-navbar">
                    <li>
                        <a href="#" className={`header-navbar-navlink ${activeTab === "Products" && "checked-nav-link"}`} onClick={(e) => { handleTabChange("Products") }}>Ürünler</a>
                    </li>
                    <li>
                        <a href="#" className={`header-navbar-navlink ${activeTab === "Contact" && "checked-nav-link"}`} onClick={(e) => { handleTabChange("Contact") }}>İletişim</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Header