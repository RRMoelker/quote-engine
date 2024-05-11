import {loadModel} from "./prediction";
import {startServer} from "./server";

const main = async () => {
    loadModel();
    startServer();
}
main();
