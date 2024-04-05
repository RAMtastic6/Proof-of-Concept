import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
import { OnModuleInit } from "@nestjs/common";

@WebSocketGateway({ cors: { origin: '*' } })
export class MyGateway implements OnModuleInit {

    // questi sono tutti dati solamente a scopo dimostrativo
    db = {}

    @WebSocketServer()
    server: Server;

    onModuleInit() {

        this.db = {
            1: {
                "menu": { "id": 1, "foods": [{ "id": 1, "name": "Spaghetti alla carbonara", "price": 10, "quantity": 20 }, { "id": 2, "name": "Spaghetti all'amatriciana", "price": 9, "quantity": 0 }, { "id": 3, "name": "Spaghetti al pomodoro", "price": 8, "quantity": 0 }] }
            },
        };

        this.server.on('connection', (socket) => {
            console.log(socket.id + " connected");

            if (socket.handshake.query["id_prenotazione"] != null) { // significa che ci stiamo connettendo al server socket.
                // debug
                console.log(this.db);
                const id_prenotazione: string = socket.handshake.query.id_prenotazione.toString();
                // TODO: this.server.to(socket.id).emit('onMessage', this.db[id_prenotazione]);
            }
        });

    }

    @SubscribeMessage('increment')
    async onIncrement(@MessageBody() body: any) {

        const prenotazione: string = body["id_prenotazione"];
        /*const piatto: string = body["plate"];
        const inc: number = body["quantity"];
        this.db[prenotazione][piatto] += inc;*/

        // debug
        console.log(this.db[prenotazione], body["menu"]);

        this.db[prenotazione]["menu"] = body["menu"];
        console.log(this.db[prenotazione]["menu"]);
        this.server.emit('onMessage', this.db[prenotazione]["menu"]);

        
    }

    @SubscribeMessage('decrement')
    async onDecrement(@MessageBody() body: any) {

        const prenotazione: string = body["id_prenotazione"];
        /*
        const piatto: string = body["plate"];
        const dec: number = body["quantity"]
        this.db[prenotazione][piatto] -= dec; */

        this.db[prenotazione]["menu"] = body["menu"];
        console.log(this.db[prenotazione]["menu"]);
        this.server.emit('onMessage', this.db[prenotazione]["menu"]);

        // debug
        console.log(this.db);
    }
}