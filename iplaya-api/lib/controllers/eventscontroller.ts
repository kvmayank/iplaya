import { Request, Response } from 'express';
import DBClient, { Collections } from '../utils/DBClient';

const DEFAULT_EVENTS_LIMIT = 10;

const CAMP_LOOKUP_OBJECT: object = {
    'from': Collections.CAMPS, 
    'localField': 'hosted_by_camp', 
    'foreignField': 'uid', 
    'as': 'host_camp'
};

export class EventsController {
    public async getAll(req: Request, res: Response) {
        var limit: number = req.query.limit ? Number(req.query.limit) : DEFAULT_EVENTS_LIMIT;
        var fetchEvents = async (limit: number) => {
            await DBClient.connect();
            // return await DBClient.collection(Collections.EVENTS).find().limit(limit).toArray();
            return await DBClient.collection(Collections.EVENTS).aggregate(
                [
                    {'$lookup': CAMP_LOOKUP_OBJECT}
                ]
            ).limit(limit).toArray();
        }
        fetchEvents(limit).then(events => {
            res.json(events);
        });
    }

    public async getEventDetails(req: Request, res: Response) {
        var uid = req.params.uid;
        var fetchEvent = async (uid: string) => {
            await DBClient.connect();
            return await DBClient.collection(Collections.EVENTS).aggregate(
                [
                    {'$match' : {'uid' : uid}},
                    {'$lookup': CAMP_LOOKUP_OBJECT}
                ]
            ).toArray();
        }
        fetchEvent(uid).then(event => {
            res.json(event);
        });
    }

    public async search(req: Request, res: Response) {
        var fetchEvents = async (query: string) => {
            var queryObject: object = {'$text': {'$search': query}};
            await DBClient.connect();
            return await DBClient.collection(Collections.EVENTS).aggregate(
                [
                    {'$match': queryObject},
                    {'$lookup': CAMP_LOOKUP_OBJECT}
                ]
            ).toArray();
        }
        fetchEvents(req.body.query).then(events => {
            res.json(events);
        });
    }
}
