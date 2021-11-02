import { Duration } from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/lib/aws-events-targets';
import { Runtime } from 'aws-cdk-lib/lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class BatchComponent {
  constructor(scope: Construct) {
    const lambda = new NodejsFunction(scope, 'batch-lambda', {
      entry: 'src/events/batch.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_14_X,
    });

    new Rule(scope, 'batchRule', {
      schedule: Schedule.rate(Duration.minutes(5)),
      targets: [new LambdaFunction(lambda, { retryAttempts: 3 })],
    });
  }
}
