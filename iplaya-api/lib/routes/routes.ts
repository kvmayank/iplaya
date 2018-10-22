import {Request, Response} from "express";

import { ArtsController } from '../controllers/artsController';
import { CampsController } from '../controllers/campscontroller';
import { EventsController } from '../controllers/eventscontroller';

export class Routes {
    private artsController: ArtsController = new ArtsController();
    private campsController: CampsController = new CampsController();
    private eventsController: EventsController = new EventsController();

    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        app.route('/events/')
        .get(this.eventsController.getAll);

        app.route('/events/search')
        .post(this.eventsController.search);

        app.route('/event/:uid')
        .get(this.eventsController.getEventDetails);

        app.route('/camps/')
        .get(this.campsController.getAll);

        app.route('/camps/search')
        .post(this.campsController.search);

        app.route('/arts/')
        .get(this.artsController.getAll);

        app.route('/arts/search')
        .post(this.artsController.search);
    }
}
