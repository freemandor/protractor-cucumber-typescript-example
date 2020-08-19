import axios, { AxiosResponse } from 'axios'
import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import { RequestHelper } from '../helpers/requestHelper';
import { TableDefinition } from 'cucumber'
import { World } from './world/world';
import { BaseSteps } from './baseSteps';
import { ParsedParamsFunctions } from '../helpers/parseParams'

@binding([World])
export class TestAPI extends BaseSteps{
    private parsedParametersFunctions: ParsedParamsFunctions
    constructor(world: World) {
    super(world)
    this.parsedParametersFunctions = new ParsedParamsFunctions(this.world)
    }

    @given(/I send a request to get employees/)
    public async ISendARequestToGetEmployees() {
      const response: AxiosResponse<any> = await RequestHelper.sendGetRquest('http://dummy.restapiexample.com/api/v1/employees')
    }

    @given('I send a request to get employee')
    public async ISendARequestToGetEmployee(params: TableDefinition) {
      const parsedParams = this.parsedParametersFunctions.parse(params.rowsHash())
      const response: AxiosResponse<any> = await RequestHelper.sendGetRquest(`http://dummy.restapiexample.com/api/v1/employee/${parsedParams['id']}`)
    }

    @given('I send a request to create employee')
    public async ISendARequestToCreateEmployee(params: TableDefinition) {
      const parsedParams = params.rowsHash()
      const response: AxiosResponse = await RequestHelper.sendPostRquest('http://dummy.restapiexample.com/api/v1/create', parsedParams)
      this.world.savedData.setLastResponse(response)
      this.world.savedData.setCreateEmployeeResponse(response)
    }
}
