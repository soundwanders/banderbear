import logger from "pino";
import dayjs from "dayjs";
import pinoPretty from "pino-pretty";

const prettyStream = pinoPretty({
  colorize: true,
  translateTime: 'yyyy-mm-dd HH:MM:ss.l', // human-friendly time format 
});

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
}, prettyStream);

export default log;
