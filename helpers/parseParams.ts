import { World } from '../step_definitions/world/world'
import { binding } from 'cucumber-tsflow/dist'

@binding([World])
export class ParsedParamsFunctions {
    protected world: World
    constructor(world: World)
    {this.world = world }

    public __getCreateEmployeeId(): string {
        const response = this.world.savedData.getCreateEmployeeResponse()

        return response.data.data.id
    }

    public parse(params: {[key: string]: string}): {[key: string]: string} {
        const parsedParams = {}
        for (const param in params) {
            if (params[param].startsWith('__')) {
                parsedParams[param] = this[params[param]]()
            } else {
                parsedParams[param] = params[param]
            }
        }
        return parsedParams
    }
}
