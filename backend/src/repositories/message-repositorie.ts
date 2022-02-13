import db from "../db";
import Message from "../model/message-model";

class MessageRepositorie {

    getAllMessages(): Promise<Message[]> {
        let result = [];

        const query = `
            SELECT id, name, message
            FROM messages
        `;
        return new Promise((resolve, reject) => {
            db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        })
    }

    createMessage(message: Message): Promise<Message> {

        if (message.name.length === 0 || message.message.length === 0) {
            return Promise.reject("Nome e mensagem são obrigatórios");
        }

        const query = `
            INSERT INTO messages (name, message)
            VALUES (?, ?)
        `;
        return new Promise((resolve, reject) => {
            db.run(query, [message.name, message.message], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(message);
                }
            });
        });
    }

}

export default new MessageRepositorie();