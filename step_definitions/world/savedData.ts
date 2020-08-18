import { AxiosResponse } from "axios";

export class SavedData {
    private lastResponse?: AxiosResponse

    public setLastResponse(response: AxiosResponse) {
        this.lastResponse = response
    }

    public getLastResponse(): AxiosResponse {
        return this.lastResponse
    }
}