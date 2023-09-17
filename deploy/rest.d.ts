import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2DeployRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeStacks(request: Request.DescribeStacksRequest): Promise<Result.DescribeStacksResult>;
    createStack(request: Request.CreateStackRequest): Promise<Result.CreateStackResult>;
    createStackFromGitHub(request: Request.CreateStackFromGitHubRequest): Promise<Result.CreateStackFromGitHubResult>;
    validate(request: Request.ValidateRequest): Promise<Result.ValidateResult>;
    getStackStatus(request: Request.GetStackStatusRequest): Promise<Result.GetStackStatusResult>;
    getStack(request: Request.GetStackRequest): Promise<Result.GetStackResult>;
    updateStack(request: Request.UpdateStackRequest): Promise<Result.UpdateStackResult>;
    changeSet(request: Request.ChangeSetRequest): Promise<Result.ChangeSetResult>;
    updateStackFromGitHub(request: Request.UpdateStackFromGitHubRequest): Promise<Result.UpdateStackFromGitHubResult>;
    deleteStack(request: Request.DeleteStackRequest): Promise<Result.DeleteStackResult>;
    forceDeleteStack(request: Request.ForceDeleteStackRequest): Promise<Result.ForceDeleteStackResult>;
    deleteStackResources(request: Request.DeleteStackResourcesRequest): Promise<Result.DeleteStackResourcesResult>;
    deleteStackEntity(request: Request.DeleteStackEntityRequest): Promise<Result.DeleteStackEntityResult>;
    describeResources(request: Request.DescribeResourcesRequest): Promise<Result.DescribeResourcesResult>;
    getResource(request: Request.GetResourceRequest): Promise<Result.GetResourceResult>;
    describeEvents(request: Request.DescribeEventsRequest): Promise<Result.DescribeEventsResult>;
    getEvent(request: Request.GetEventRequest): Promise<Result.GetEventResult>;
    describeOutputs(request: Request.DescribeOutputsRequest): Promise<Result.DescribeOutputsResult>;
    getOutput(request: Request.GetOutputRequest): Promise<Result.GetOutputResult>;
}
