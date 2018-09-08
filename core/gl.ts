namespace WS
{
    var glContext: WebGLRenderingContext|CanvasRenderingContext2D;

    export class Utils
    {
        public static createCanvas()
        {
            const canvas: HTMLCanvasElement = document.createElement("canvas");
            canvas.id = "game-canvas";

            glContext = canvas.getContext("webgl2");
            if (!glContext)
            {
                glContext = canvas.getContext("webgl");
                if (!glContext)
                {
                    console.log("%c NO WEBGL AVAILABLE", "color: #bada55");
                }
                else
                {
                    console.log("%c WEBGL", "color: #bada55");
                }
            }
            else
            {
                console.log("%c WEBGL2", "color: #bada55");
            }
        }
    }
}