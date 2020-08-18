import axios, { AxiosResponse } from 'axios'

axios.interceptors.request.use(request => {
    console.log(`
*********************************************
*********************************************
                REQUST
*********************************************
*********************************************

path: ${request.url}
params: ${JSON.stringify(request.data) || '{}'}

*********************************************
*********************************************
        `)
    return request
  })
  
  axios.interceptors.response.use(response => {
    console.log(`
*********************************************
*********************************************
                RESPONSE
*********************************************
*********************************************

status: ${response.status}
body: ${JSON.stringify(response.data.data) || '{}'}

*********************************************
*********************************************
   `);
    
    return response
  })

export class RequestHelper {
    public static async sendGetRquest(path: string): Promise<AxiosResponse> {
        return await axios.get(path)
    }

    public static async sendPostRquest(path: string, params: object): Promise<AxiosResponse> {
        
        return await axios.post(path, params)
    }
}
