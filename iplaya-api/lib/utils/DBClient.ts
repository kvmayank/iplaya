import IEvent from '../models/event';
import {MongoClient} from 'mongodb';
import {Db} from 'mongodb';

const uri = "mongodb://kvmayank:delhi123@iplaya-shard-00-00-i5pik.mongodb.net:27017,iplaya-shard-00-01-i5pik.mongodb.net:27017,iplaya-shard-00-02-i5pik.mongodb.net:27017/test?ssl=true&replicaSet=iPlaya-shard-0&authSource=admin&retryWrites=true";
const db_name = "playa_2018";
const arts_collection = "arts";
const events_collection = "events";
const camps_collection = "camps";

class DBClient {
    private client: MongoClient;
    private db: Db;

    public async connect(): Promise<void> {
        if (!this.db) {
            this.client = await MongoClient.connect(uri);
            this.db = this.client.db(db_name);
        }        
    }

    public async fetchEvents(limit: number): Promise<Array<IEvent>> {
        return await this.db.collection('events').find().limit(limit).toArray();
    }
}

export default new DBClient();

