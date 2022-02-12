const NavTop = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Drink Shop</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(Página atual)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Whisky</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Vodica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Gin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Cervejas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavTop;