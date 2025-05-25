import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2NewsRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult>;
    describeProgresses(request: Request.DescribeProgressesRequest): Promise<Result.DescribeProgressesResult>;
    getProgress(request: Request.GetProgressRequest): Promise<Result.GetProgressResult>;
    describeOutputs(request: Request.DescribeOutputsRequest): Promise<Result.DescribeOutputsResult>;
    getOutput(request: Request.GetOutputRequest): Promise<Result.GetOutputResult>;
    prepareUpdateCurrentNewsMaster(request: Request.PrepareUpdateCurrentNewsMasterRequest): Promise<Result.PrepareUpdateCurrentNewsMasterResult>;
    updateCurrentNewsMaster(request: Request.UpdateCurrentNewsMasterRequest): Promise<Result.UpdateCurrentNewsMasterResult>;
    prepareUpdateCurrentNewsMasterFromGitHub(request: Request.PrepareUpdateCurrentNewsMasterFromGitHubRequest): Promise<Result.PrepareUpdateCurrentNewsMasterFromGitHubResult>;
    describeNews(request: Request.DescribeNewsRequest): Promise<Result.DescribeNewsResult>;
    describeNewsByUserId(request: Request.DescribeNewsByUserIdRequest): Promise<Result.DescribeNewsByUserIdResult>;
    wantGrant(request: Request.WantGrantRequest): Promise<Result.WantGrantResult>;
    wantGrantByUserId(request: Request.WantGrantByUserIdRequest): Promise<Result.WantGrantByUserIdResult>;
}
