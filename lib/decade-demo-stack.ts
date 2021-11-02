import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BatchComponent } from './components/batch-component';
import { RestApiComponent } from './components/restapi-component';

export class DecadeDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new RestApiComponent(this);
    new BatchComponent(this);
  }
}
