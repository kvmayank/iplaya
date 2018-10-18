import IEvent from '../models/event';
import {MongoClient} from 'mongodb';
import {Db} from 'mongodb';

const uri = "mongodb://kvmayank:delhi123@iplaya-shard-00-00-i5pik.mongodb.net:27017,iplaya-shard-00-01-i5pik.mongodb.net:27017,iplaya-shard-00-02-i5pik.mongodb.net:27017/test?ssl=true&replicaSet=iPlaya-shard-0&authSource=admin&retryWrites=true";
const db_name = "playa_2018";

export enum Collections {
    ARTS = 'arts',
    EVENTS = 'events',
    CAMPS = 'camps'
}

export interface ISearchQuery {
    text: string,
}

class DBClient {
    private client: MongoClient;
    private db: Db;

    public async connect(): Promise<void> {
        if (!this.db) {
            this.client = await MongoClient.connect(uri);
            this.db = this.client.db(db_name);
        }        
    }

    public async fetchRecords(collecton: Collections, limit: number): Promise<Array<IEvent>> {
        return await this.db.collection(collecton).find().limit(limit).toArray();
    }

    public async searchRecords(collecton: Collections, query: ISearchQuery): Promise<Array<IEvent>> {
        var queryObject: object = {'$text': {'$search': query.text}};
        return await this.db.collection(collecton).find(queryObject).toArray();
    }
}

export default new DBClient();

