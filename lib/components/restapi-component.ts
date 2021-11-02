import { CfnOutput } from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/lib/aws-apigateway';
import { Runtime } from 'aws-cdk-lib/lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class RestApiComponent {
  constructor(scope: Construct) {
    const lambda = new NodejsFunction(scope, 'restapi-lambda', {
      entry: 'src/events/lambda.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_14_X,
    });

    const api = new LambdaRestApi(scope, 'rest-api', {
      handler: lambda,
      deployOptions: {
        stageName: 'prod',
      },
    });

    new CfnOutput(scope, 'apiUrl', {
      exportName: 'apiUrl',
      value: api.url,
    });
  }
}
