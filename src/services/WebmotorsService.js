import { server } from "../common/server"

const service = server();

class WebmotorsService {
    
    static async getMakes() {
        const response = await service
            .get(`/api/OnlineChallenge/Make`);

        return response.data;
    }

    static async getModels(makeId) {
        const response = await service
            .get(`/api/OnlineChallenge/Model?MakeID=${makeId}`);

        return response.data;
    }

    static async getVersions(modelId) {
        const response = await service
            .get(`/api/OnlineChallenge/Version?ModelId=${modelId}`);

        return response.data;
    }

    static async getVehicles() {
        const response = await service
            .get(`/api/OnlineChallenge/Vehicles?Page=1`)

        return response.data;
    }

}

export default WebmotorsService;