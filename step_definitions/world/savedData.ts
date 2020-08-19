import { AxiosResponse } from "axios";

export class SavedData {
    private lastResponse?: AxiosResponse
    private createEmployeeResponse?: AxiosResponse

    public setLastResponse(response: AxiosResponse) {
        this.lastResponse = response
    }

    public getLastResponse(): AxiosResponse {
        return this.lastResponse
    }

    public getCreateEmployeeResponse(): AxiosResponse {
        return this.createEmployeeResponse
    }

    public setCreateEmployeeResponse(response: AxiosResponse) {
        this.createEmployeeResponse = response
    }
}
