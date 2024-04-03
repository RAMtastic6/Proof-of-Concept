import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io'
import { OnModuleInit } from "@nestjs/common";

@WebSocketGateway()
export class MyGateway implements OnModuleInit {

    // questi sono tutti dati solamente a scopo dimostrativo
    db = {
        "id_prenotazione_1" : {
            "piatto1" : 0,
            "piatto2" : 0,
            "piatto3" : 0
        },
        "id_prenotazione_2" : {
            "piatto4" : 0,
            "piatto5" : 0,
            "piatto6" : 0
        },
    }

    // db per simulare un'ordinazione
    piatti = {
        "piatto1" : 0,
        "piatto2" : 0
    };

    @WebSocketServer()
    server: Server;
    // 'newMessage' è il nome dell'evento sul quale
    // il server è in ascolto in questo momento
    // on newMessage() è il metodo che risponde a quell'evento.
    // all'interno di esso vi è la logica.

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id + " connected");


            if (socket.handshake.query["id_prenotazione"] != null) { // significa che ci stiamo connettendo al server socket.
            //     TODO
            //     const result = await this.reservationRepository.find({ ... })
                const id_prenotazione: string = socket.handshake.query.id_prenotazione.toString(); 
                console.log(id_prenotazione);
                this.server.to(socket.id).emit('onMessage', { prenotazione : this.db[id_prenotazione]});
            }
        });
    }
    

    // body deve avere questo formato per il momento:
    // {
    //     "id_ordinazione" : string
    //     "plate" : string,
    //     "quantity" : number
    // } 

    @SubscribeMessage('increment')
    async onIncrement(@MessageBody() body: any) {
        
        // TODO 
        // const result = await this.reservationRepository.find({ ... })
        
        const prenotazione : string = body["id_prenotazione"];
        const piatto : string = body["plate"];
        const inc : number = body["quantity"]

        this.db[prenotazione][piatto] += inc;
        console.log(this.db);

        this.server.emit('onMessage', {
            "ordine" : this.db[prenotazione]
        })
    }

    @SubscribeMessage('decrement')
    async onDecrement(@MessageBody() body: any) {

        // TODO 
        // const result = await this.reservationRepository.find({ ... })

        const prenotazione : string = body["id_prenotazione"];
        const piatto : string = body["plate"];
        const dec : number = body["quantity"]

        this.db[prenotazione][piatto] -= dec;
        console.log(this.db);

        this.server.emit('onMessage', {
            "ordine" : this.db[prenotazione]
        })
              
    }
}