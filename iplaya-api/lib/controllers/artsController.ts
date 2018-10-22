import { Request, Response } from 'express';
import DBClient, { Collections } from '../utils/DBClient';

const DEFAULT_ARTS_LIMIT = 10;

export class ArtsController {
    public async getAll(req: Request, res: Response) {
        var limit: number = req.query.limit ? Number(req.query.limit) : DEFAULT_ARTS_LIMIT;
        var fetchCamps = async (limit: number) => {
            await DBClient.connect();
            return await DBClient.collection(Collections.ARTS).find().limit(limit).toArray();
        }
        fetchCamps(limit).then(camps => {
            res.json(camps);
        });
    }

    public async search(req: Request, res: Response) {
        var fetchRecords = async () => {
            await DBClient.connect();
            var queryObject: object = {'$text': {'$search': req.body.query}};
            return await DBClient.collection(Collections.ARTS).find(queryObject).toArray();
        }
        fetchRecords().then(result => {
            res.json(result);
        });
    }    
}
