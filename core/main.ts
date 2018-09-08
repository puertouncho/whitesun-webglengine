namespace WS
{
    export class Engine
    {
        constructor()
        {

        }
    }
}

window.onload = () => 
{
    console.log("CREATING ENGINE");
    const engine = new WS.Engine();
    console.log("ENGINE CREATED");
}