import { getManager, createConnection, UpdateResult, DeleteResult, ObjectID } from "typeorm";
import { Client } from '../entities/clients';

class CarSaleServices {

    constructor() {
        createConnection().then((conn) => {
            console.log("DB Connection is open");
        }).catch((err) => {
            console.log(`Error in connection: ${err}`)
        })
    }

    public async findClients(): Promise<Client[]> {
        let result = await getManager().getRepository(Client).find({ active: true });
        return result;
    }

    public async findClientsById(id: any): Promise<Client> {
        return await getManager().getRepository(Client).findOne(id);
    }

    public async createClients(data: Client): Promise<Client> {
        let client: Client = new Client();
        client.name = data.name;
        client.phone = data.phone;
        client.address = data.address;
        client.concessionaire = data.concessionaire;
        client.active = true;
        return getManager().getRepository(Client).save(client);
    }

    public async updateClients(data: Client, id: any): Promise<UpdateResult> {
        let client: Client = await this.findClientsById(data.id);
        client.name = data.name;
        client.phone = data.phone;
        client.address = data.address;
        client.concessionaire = data.concessionaire;
        client.active = true;
        return getManager().getRepository(Client).update(id, client);
    }

    public async deleteClients(id: any): Promise<DeleteResult> {
        let client: Client = await this.findClientsById(id);
        client.active = false;
        console.log(client)
        return getManager().getRepository(Client).update(id, client);

    }
}

export default new CarSaleServices();