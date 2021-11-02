import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';

import serverlessExpress from '@vendia/serverless-express';
import { app } from './express/app';

exports.handler = serverlessExpress({ app });

// export const handler = async (
//   event: APIGatewayProxyEvent,
//   context: APIGatewayEventRequestContext
// ): Promise<APIGatewayProxyResult> => {
//   console.log(event);

//   const responseBody = {
//     message: 'hello world',
//   };

//   return {
//     statusCode: 200,
//     body: JSON.stringify(responseBody),
//   };
// };
