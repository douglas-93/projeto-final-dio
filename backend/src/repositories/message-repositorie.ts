import Message from "../model/Message-model";
import db from "../db";

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

}

export default new MessageRepositorie();