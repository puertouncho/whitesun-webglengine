/// <reference path="./gl.ts"/>
/// <reference path="./logging.ts"/>

namespace WS
{
    export class Engine
    {
        constructor()
        {

        }

        public initialise(canvasId?:string)
        {
            Utils.createCanvas(canvasId);

            glContext.clearColor(0, 0, 0, 1);

            requestAnimationFrame(this.update.bind(this));
        }

        private update()
        {
            glContext.clear(glContext.COLOR_BUFFER_BIT);

            requestAnimationFrame(this.update.bind(this));
        }
    }
}

window.onload = () => 
{
    WS.Log.info("CREATING ENGINE");
    const engine = new WS.Engine();
    engine.initialise();
    WS.Log.info("ENGINE CREATED");
}