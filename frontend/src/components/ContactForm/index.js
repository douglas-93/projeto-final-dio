import { useState, useEffect } from "react";

const ContactForm = () => {

    const uri = "http://localhost:5000/contact";
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [fullFilledFields, setFullFilledFields] = useState(false);
    const [sendedMessage, setSendedMessage] = useState(false);


    const [messages, setMessages] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(uri);
            const data = await response.json();
            setMessages(data);
        }
        fetchData();
    }, [render]);

    const sendMessage = async () => {
        if (name.length <= 0 || message.length <= 0) {
            setFullFilledFields(!fullFilledFields);
            setTimeout(() => {
                setFullFilledFields(false);
            }, 5000);
        }

        const postData = {
            name: name,
            message: message
        }

        const response = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        if (data) {
            setSendedMessage(true);
        }
        setName('');
        setMessage('');
        setRender(true);
    }

    return (
        <>
            <div className="container mt-4">
                <div className="form-group">
                    <label htmlFor="nameInput">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        placeholder="Informe seu nome"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="messageInput">Menssagem</label>
                    <input
                        type="text"
                        className="form-control"
                        id="messageInput"
                        placeholder="Sua mensagem"
                        value={message}
                        onChange={(event) => { setMessage(event.target.value) }}
                    />
                </div>

                {fullFilledFields &&
                    <div className="alert alert-danger" role="alert">
                        Preencha todos os campos!
                    </div>
                }
                
                {sendedMessage &&
                    <div className="alert alert-success" role="alert">
                        Mensagem enviada!
                    </div>
                }

                <button type="submit" className="btn btn-dark" onClick={sendMessage}>
                    Enviar
                </button>
            </div>

            {messages.map((content) => {
                return (
                    <div className="container mt-2" key={content.id}>
                        <div className="card w-75">
                            <div className="card-body">
                                <h5 className="card-title">{content.name}</h5>
                                <p className="card-text">{content.message}</p>
                            </div>
                        </div>
                    </div>
                );
            }
            )}
        </>
    );
}

export default ContactForm;