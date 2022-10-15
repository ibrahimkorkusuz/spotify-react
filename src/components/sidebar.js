import logo from "img/logo.svg";
import Menu from "components/Sidebar/Menu"
import Playlists from "components/Sidebar/Playlists"
import DownloadApp from "components/Sidebar/DownloadApp"

import { Icon } from 'icons';

function Sidebar() {
    return (
        <aside className="w-60 pt-6 flex flex-col bg-black">
            <a href="#" className="mb-7 px-6">
                <img src={logo} alt="" className="h-10"/>
            </a>

            <Menu />

            <nav className="mt-6">
                <ul>
                    <li>
                        <a className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white" href="#">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 bg-white rounded-sm text-black">
                                <Icon name="plus" size={12} />
                            </span>
                            Çalma Listesi Oluştur
                        </a>

                        <a className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white" href="#">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-60 group-hover:opacity-100">
                                <Icon name="hearth" size={12} />
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlists />

            <DownloadApp />
        </aside>
    )
}

export default Sidebar