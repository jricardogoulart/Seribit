import { Link } from "react-router-dom"
import MenuStyle from "../style/MenuStyle"
import Logo from '../images/Vector.png';
import { TbLogout2 } from "react-icons/tb";

const Menu = () => {
    return (
        <div className="menu">
            <MenuStyle />
            <div className="top">
                <img src={Logo} alt="logo"  className="logo"/>
                <div className="logout">
                    <TbLogout2 />
                    SAIR
                </div>
            </div>
            
            <div className="mid">
                <ul>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/usuarios">Usuários</Link></li>
                    <li><Link to="/vales">Vales</Link></li>            
                </ul>
            </div>

            <div></div>
        </div>
    )
}

export default Menu