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

        app.route('/arts/')
        .get(this.artsController.getAll);

        // Contact 
        app.route('/contact') 
        // GET endpoint 
        .get((req: Request, res: Response) => {
        // Get all contacts            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })        
        // POST endpoint
        .post((req: Request, res: Response) => {   
        // Create new contact         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get((req: Request, res: Response) => {
        // Get a single contact detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a contact           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            })
        })
        .delete((req: Request, res: Response) => {       
        // Delete a contact     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            })
        })        
    }
}
