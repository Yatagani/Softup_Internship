import * as path from 'path';
import { Stack, StackProps, aws_apigateway as apigateway, aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'test-function', {
      functionName: 'test-function',
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../handlers/hello_world/')),
    });

    const api = new apigateway.LambdaRestApi(this, 'test-api', {
      handler: fn,
      proxy: false
    });

    api.root.addMethod('GET', new apigateway.LambdaIntegration(fn));
  }
}
