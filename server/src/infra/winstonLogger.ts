const winston = require("winston");

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),        
    ),
    transports: [
        new winston.transports.Console()
    ]
});

export default logger;