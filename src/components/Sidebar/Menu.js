import { Icon } from 'icons';
import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} activeClassName="bg-active text-white" className="px-4 h-10 flex gap-x-4 items-center text-sm text font-semibold hover:text-white text-link rounded">
                        <span>
                            <Icon name="home" />
                        </span>
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} activeClassName="bg-active text-white" className="rounded px-4 h-10 flex gap-x-4 items-center text-sm text font-semibold hover:text-white text-link">
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} activeClassName="bg-active text-white" className="rounded px-4 h-10 flex gap-x-4 items-center text-sm text font-semibold hover:text-white text-link">
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu