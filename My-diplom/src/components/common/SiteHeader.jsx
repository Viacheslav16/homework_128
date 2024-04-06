import './../../assets/scss/common/header.scss'


export default function SiteHeader(){

    return (
        <header>
        <div className="container">
            <div className="header_top">
            <div>
                <a href="#" target="_blank"> <img src="assets/images/SPYRO.svg" alt="logo"/></a>
            </div>
            <div className="nav_top">
                <nav>
                <ul className="nav_link">
                    <li>
                        <div className="nav_choise">
                        <a href="#">ABOUT US</a>
                        </div>
                    </li>
                    <li>
                        <div className="nav_choise">
                        <a href="#">GALLERY </a>
                        </div>
                    </li>
                    <li>
                        <div className="nav_choise">
                        <a href="#">NEWS</a>
                        </div>
                    </li>
                    <li>
                        <div className="nav_choise">
                        <a href="#">TEAM</a>
                        </div>
                    </li>
                    <li>
                        <div className="nav_choise">
                        <a href="#">CONTACT</a>
                        </div>
                    </li>
                </ul>
                </nav>
                <div className="hamburger">
                <button
                    id="new_hamb"
                    className="hamburger hamburger--squeeze"
                    type="button">
                    <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    </span>
                </button>
                </div>
                <ul className="header_links">
                <li>
                    <a href="#" target="_blank"><img src="assets/images/Group3.svg" alt="instagram"/></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src="assets/images/Group1.svg" alt="facebook"/></a>
                </li>
                <li>
                    <a href="#" target="_blank"><img src="assets/images/Group2.svg" alt="twitter"/></a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </header>
    )
}