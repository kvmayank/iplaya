import { Request, Response } from 'express';
import DBClient from '../utils/DBClient';

const DEFAULT_EVENTS_LIMIT = 10;

export class EventsController {
    public async getAllEvents(req: Request, res: Response) {
        var limit: number = req.query.limit ? Number(req.query.limit) : DEFAULT_EVENTS_LIMIT;
        var fetchEvents = async (limit: number) => {
            await DBClient.connect();
            var events = await DBClient.fetchEvents(10);
            return events;
        }
        fetchEvents(limit).then(events => {
            res.json(events);
        });
    }
}
