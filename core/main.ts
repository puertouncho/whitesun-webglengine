namespace WS
{
    export class Engine
    {
        constructor()
        {

        }

        public initialise()
        {
            Utils.createCanvas();
            requestAnimationFrame(this.update.bind(this));
        }

        private update()
        {
            requestAnimationFrame(this.update.bind(this));
        }
    }
}

window.onload = () => 
{
    console.log("CREATING ENGINE");
    const engine = new WS.Engine();
    engine.initialise();
    console.log("ENGINE CREATED");
}