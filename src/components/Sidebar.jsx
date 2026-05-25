import "../styles/global.css"
import "../styles/sidebar.css"

import menuArrow from "../assets/menu-arrow.png"
import menuMenu from "../assets/menu-menu.png"
import arrow from "../assets/arrow.png"
import favorite from "../assets/favorite.png"
import recent from "../assets/recent.png"
import folder from "../assets/folder.png"
import page from "../assets/page.png"
import search from "../assets/search.png"
import trash from "../assets/trash.png"

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Header */}

            <div className="sidebar-top">

                <div className="sidebar-header">

                    <img
                        src="/public/icon.png"
                        alt="Logo"
                        className="logo"
                    />

                    <button className="icon-button">

                        <img
                            src={menuArrow}
                            alt="Fechar menu"
                            className="icon collapse-icon"
                        />

                    </button>

                </div>

                <button className="menu-button">

                    <img
                        src={menuMenu}
                        alt=""
                        className="icon"
                    />

                    <p>Gerenciar campanhas</p>

                </button>

            </div>

            {/* Content */}

            <div className="sidebar-content">

                {/* Campaign */}

                <section className="sidebar-section">

                    <h2 className="section-title">
                        Campanha Exemplo
                    </h2>

                    <ul className="sidebar-list">

                        <li>

                            <button className="sidebar-item">

                                <img
                                    src={arrow}
                                    alt=""
                                    className="icon arrow-icon"
                                />

                                <img
                                    src={favorite}
                                    alt=""
                                    className="icon"
                                />

                                <span>Favoritos</span>

                            </button>

                        </li>

                        <li>

                            <button className="sidebar-item">

                                <img
                                    src={arrow}
                                    alt=""
                                    className="icon arrow-icon"
                                />

                                <img
                                    src={recent}
                                    alt=""
                                    className="icon"
                                />

                                <span>Recentes</span>

                            </button>

                        </li>

                    </ul>

                </section>

                {/* Characters */}

                <section className="sidebar-section">

                    <h2 className="section-title">
                        Todos os personagens
                    </h2>

                    <ul className="sidebar-list">

                        <li>

                            <button className="sidebar-item">

                                <img
                                    src={arrow}
                                    alt=""
                                    className="icon arrow-icon"
                                />

                                <img
                                    src={folder}
                                    alt=""
                                    className="icon"
                                />

                                <span>NPCs</span>

                            </button>

                            <ul className="nested-list">

                                <li>

                                    <button className="sidebar-item file-item">

                                        <img
                                            src={page}
                                            alt=""
                                            className="icon"
                                        />

                                        <span>Açougueiro goblin</span>

                                    </button>

                                </li>

                                <li>

                                    <button className="sidebar-item file-item">

                                        <img
                                            src={page}
                                            alt=""
                                            className="icon"
                                        />

                                        <span>Comerciante elfo</span>

                                    </button>

                                </li>

                                <li>

                                    <button className="sidebar-item file-item">

                                        <img
                                            src={page}
                                            alt=""
                                            className="icon"
                                        />

                                        <span>Guarda real 1</span>

                                    </button>

                                </li>

                                <li>

                                    <button className="sidebar-item file-item">

                                        <img
                                            src={page}
                                            alt=""
                                            className="icon"
                                        />

                                        <span>Guarda real 2</span>

                                    </button>

                                </li>

                            </ul>

                        </li>

                        <li>

                            <button className="sidebar-item">

                                <img
                                    src={arrow}
                                    alt=""
                                    className="icon arrow-icon"
                                />

                                <img
                                    src={folder}
                                    alt=""
                                    className="icon"
                                />

                                <span>Personagens</span>

                            </button>

                        </li>

                        <li>

                            <button className="sidebar-item">

                                <img
                                    src={arrow}
                                    alt=""
                                    className="icon arrow-icon"
                                />

                                <img
                                    src={folder}
                                    alt=""
                                    className="icon"
                                />

                                <span>Outros</span>

                            </button>

                        </li>

                    </ul>

                </section>

            </div>

            {/* Footer */}

            <div className="sidebar-footer">

                <button className="footer-button">

                    <img
                        src={search}
                        alt=""
                        className="icon"
                    />

                    <p>Pesquisar</p>

                </button>

                <button className="footer-button">

                    <img
                        src={trash}
                        alt=""
                        className="icon"
                    />

                    <p>Lixeira</p>

                </button>

            </div>

        </aside>
    )
}

export default Sidebar