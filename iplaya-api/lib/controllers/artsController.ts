import { Request, Response } from 'express';
import DBClient, { Collections } from '../utils/DBClient';

const DEFAULT_ARTS_LIMIT = 10;

export class ArtsController {
    public async getAll(req: Request, res: Response) {
        var limit: number = req.query.limit ? Number(req.query.limit) : DEFAULT_ARTS_LIMIT;
        var fetchCamps = async (limit: number) => {
            await DBClient.connect();
            return await DBClient.fetchRecords(Collections.ARTS, limit);
        }
        fetchCamps(limit).then(camps => {
            res.json(camps);
        });
    }
}
