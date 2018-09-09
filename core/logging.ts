namespace WS
{
    export class Log
    {
        protected static loggingEnabled: boolean = true;

        public static error(message: string)
        {
            if (!this.loggingEnabled) { return; }
            console.log("%c "+message, "color: #ff0000; font-weight: bold;");
            throw null;
        }

        public static warn(message: string)
        {
            if (!this.loggingEnabled) { return; }
            console.log("%c "+message, "color: #dfdf00; font-weight: bold;");
        }

        public static success(message: string)
        {
            if (!this.loggingEnabled) { return; }
            console.log("%c "+message, "color: #008000; font-weight: bold;");
        }

        public static info(message: string)
        {
            if (!this.loggingEnabled) { return; }
            console.log("%c "+message, "color: #000000; font-weight: bold;");
        }
    }
}