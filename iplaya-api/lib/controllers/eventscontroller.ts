import { Request, Response } from 'express';
import DBClient, { Collections } from '../utils/DBClient';

const DEFAULT_EVENTS_LIMIT = 10;

export class EventsController {
    public async getAll(req: Request, res: Response) {
        var limit: number = req.query.limit ? Number(req.query.limit) : DEFAULT_EVENTS_LIMIT;
        var fetchEvents = async (limit: number) => {
            await DBClient.connect();
            return await DBClient.fetchRecords(Collections.EVENTS, limit);
        }
        fetchEvents(limit).then(events => {
            res.json(events);
        });
    }

    public async search(req: Request, res: Response) {
        var fetchEvents = async () => {
            await DBClient.connect();
            return await DBClient.searchRecords(Collections.EVENTS, {text: req.body.query});
        }
        fetchEvents().then(events => {
            res.json(events);
        });
    }
}
