import { getManager, createConnection, UpdateResult, DeleteResult, ObjectID } from "typeorm";
import { Client } from '../entities/clients';
import { Concessionaire } from '../entities/concessionaire';
import { Locality } from '../entities/locality';

class GenericServices {

    constructor() {
        createConnection().then((conn) => {
            console.log("DB Connection is open");
        }).catch((err) => {
            console.log(`Error in connection: ${err}`)
        })
    }

    public async findLocality(): Promise<Locality[]> {
        let result = await getManager().getRepository(Locality).find({ active: true });
        return result;
    }

    public async findConcessionaire(): Promise<Concessionaire[]> {
        let result = await getManager().getRepository(Concessionaire).find({ active: true });
        return result;
    }

    public async createConcessionaire(data: Concessionaire): Promise<Concessionaire> {
        let concessionaire: Concessionaire = new Concessionaire();
        concessionaire.name = data.name;
        concessionaire.locality = data.locality;
        concessionaire.active = true;
        return getManager().getRepository(Concessionaire).save(concessionaire);
    }

    public async createLocality(data: Locality): Promise<Locality> {
        let locality: Locality = new Locality();
        locality.name = data.name;
        locality.active = true;
        return getManager().getRepository(Locality).save(locality);
    }

}

export default new GenericServices();