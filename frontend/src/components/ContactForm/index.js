const ContactForm = () => {
    return (
        <div className="container">
            <form className="mt-4">
                <div className="form-group">
                    <label htmlFor="nameInput">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Informe seu nome"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="messageInput">Menssagem</label>
                    <input
                        type="text"
                        className="form-control"
                        id="messageInput"
                        placeholder="Sua mensagem"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default ContactForm;