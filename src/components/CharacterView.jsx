import "../styles/CharacterView.css"
import "../styles/global.css"

import more from "../assets/more.png"
import exp from "../assets/exp.png"
import imp from "../assets/imp.png"

function CharacterView() {
    return (
        <main className="character-view">

            {/* Topbar */}

            <header className="character-topbar">


                <button className="exp-button">

                    <img
                        src={exp}
                        alt="importar/exportar ficha"
                        className="topbar-icon"
                    />

                </button>

            
            </header>

            <div className="topbar-line">
                <div className="topbar-line-line"></div>
            </div>

            {/* Content */}

            <section className="character-content">

                {/* Header */}

                <div className="character-header">

                    <h1 className="character-name">
                        Açougueiro goblin
                    </h1>

                    <button className="new-category-button">

                        <img
                            src="/icons/plus-circle.png"
                            alt=""
                            className="content-icon"
                        />

                        <span>Criar nova categoria</span>

                    </button>

                </div>

                {/* Lore */}

                <section className="info-section">

                    <button className="section-dropdown">

                        <img
                            src="/icons/chevron-down.png"
                            alt=""
                            className="content-icon arrow-small"
                        />

                        <h2>Lore:</h2>

                    </button>

                    <ul className="lore-list">

                        <li>
                            Se chama Edward, 45 anos, 1,55m;
                        </li>

                        <li>
                            É filha de uma bruxa que foi presa por
                            tentar amaldiçoar o rei;
                        </li>

                        <li>
                            Há rumores de que ele tem algo nas
                            costas que esconde a todo custo.
                        </li>

                    </ul>

                </section>

                {/* Sheet */}

                <section className="sheet-section">

                    <h2 className="sheet-title">
                        Ficha:
                    </h2>

                    <div className="sheet-content">

                        {/* ficha aqui */}

                    </div>

                </section>

            </section>

        </main>
    )
}

export default CharacterView