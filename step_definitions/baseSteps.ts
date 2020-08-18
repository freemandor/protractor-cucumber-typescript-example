import { binding } from "cucumber-tsflow";
import { World } from "./world/world";


@binding([World])
export class BaseSteps {
    protected world: World
    constructor(world: World)
    {this.world = world }
}
