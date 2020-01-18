import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { Route } from "./routes/routes";

class Server {

    public app: express.Application;
    public route: Route = new Route();

    constructor() {
        this.app = express();
        this.config();
        this.route.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
}

export default new Server();