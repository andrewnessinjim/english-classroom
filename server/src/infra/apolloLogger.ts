import logger from "./winstonLogger";

export default {
    async requestDidStart(requestContext) {
        logger.info(`Request started for ${requestContext.request.operationName} operation`);
        logger.debug(`GraphQL Request: ${requestContext.request.query}`);

        return {
            async willSendResponse(requestContext) {
                logger.info(`Sending response for ${requestContext.request.operationName} operation`);
            }
        }
    }
}