import Server from './server';
import * as env from "dotenv";

env.config();

Server.app.listen(3000, () => {
    console.log('Express server listening on port ' + 3000);
})