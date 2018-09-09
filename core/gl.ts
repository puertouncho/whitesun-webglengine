namespace WS
{
    export var glContext: WebGLRenderingContext|any;

    export class Utils
    {
        /**
         * Create the canvas element and saves the gl context
         * @param canvasId 
         */
        public static createCanvas(canvasId?: string)
        {
            const alreadyExist = document.getElementById(canvasId);
            if (alreadyExist && alreadyExist.nodeName !== "canvas")
            {
                throw "Already exist a non canvas element with the id: " + canvasId;
            }

            const canvas: HTMLCanvasElement = alreadyExist? alreadyExist as HTMLCanvasElement : document.createElement("canvas");
            canvas.id = canvasId? canvasId : "whitesun-game-canvas";

            glContext = canvas.getContext("webgl2");
            if (!glContext)
            {
                glContext = canvas.getContext("webgl");
                if (!glContext)
                {
                    WS.Log.error("NO WEBGL AVAILABLE");
                }
                else
                {
                    WS.Log.success("White Sun Engine - WEBGL");
                }
            }
            else
            {
                WS.Log.success("White Sun Engine - WEBGL2");
            }
            document.body.appendChild(canvas)
        }
    }
}