
import { App, Entity, Controller, World, State, ThreeRenderer, ThreeMesh, ThreeScene } from 'cog2/cog2';

@app({
    world: PongWorld,
    scene: PongScene,
    renderers: [ ThreeRenderer ],
    systems: []
})
export class Pong extends App {}


@world({
    stateClass: PongState
})
export class PongWorld extends World {}


export class PongState extends State {
    player1Score: number = 0;
    player2Score: number = 0;
}

///////////////////

@entity({
    tag: 'ball',
    components: []
})
export class Ball extends Entity {}

@entity({
    tag: 'paddle',
    components: []
})
export class Paddle extends Entity {}

/////////////////////

export class PlayerPaddleController extends Controller {
}

export class AIPaddleController extends Controller {
}


/////////////////////

export class PongScene extends ThreeScene {

}

export class BallMesh extends ThreeMesh {

}

export class PaddleMesh extends ThreeMesh {

}


