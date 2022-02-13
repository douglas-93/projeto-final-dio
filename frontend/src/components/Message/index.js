import { useState, useEffect } from "react";

const Message = () => {
    const uri = "http://localhost:5000/contact";

    const [message, setMessage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(uri);
            const data = await response.json();
            setMessage(data);
        }
    fetchData();
    }, []);

    return (
        <div>
            {message.map((content) => {
                return (
                    <div className="container mt-5" key={content.id}>
                        <div className="card w-50">
                            <div className="card-body">
                                <h5 className="card-title">{content.name}</h5>
                                <p className="card-text">{content.message}</p>
                            </div>
                        </div>
                    </div>
                );
            }
            )
            }
        </div>
    )
}

export default Message;