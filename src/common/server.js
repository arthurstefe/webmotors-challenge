import axios from 'axios';
import {dev, prod} from "../config";
const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

let baseUrl = config.apiGateway.URL;

export function server() {
    let connection = axios.create({
        baseURL: baseUrl,
        responseType: 'json',
    });

    return connection;
}
