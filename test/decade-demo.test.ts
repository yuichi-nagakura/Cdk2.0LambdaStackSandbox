import * as cdk from 'aws-cdk-lib';
import * as DecadeDemo from '../lib/decade-demo-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DecadeDemo.DecadeDemoStack(app, 'MyTestStack');
    // THEN
    const actual = app.synth().getStackArtifact(stack.artifactId).template;
    expect(actual.Resources ?? {}).toEqual({});
});
