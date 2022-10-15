import { Icon } from "icons"

function DownloadApp() {
    return (
        <a href="#" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center gap-x-4 px-6">
            <Icon name="download" size={20} />
            Uygulamayı yükle
        </a>
    )
}

export default DownloadApp