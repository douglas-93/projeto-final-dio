import { useState, useEffect } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const useEffect = () => {}

    return (
        <div className="container">
        <form class="mt-4">
            <div class="form-group">
                <label for="nameInput">Nome</label>
                <input
                    type="text"
                    class="form-control"
                    id="nameInput"
                    placeholder="Informe seu nome"
                />
            </div>
            <div class="form-group">
                <label for="messageInput">Menssagem</label>
                <input
                    type="text"
                    class="form-control"
                    id="messageInput"
                    placeholder="Sua mensagem"
                />
            </div>
            <button type="submit" class="btn btn-primary">
                Enviar
            </button>
        </form>
        </div>
    );
};

export default Contact;
