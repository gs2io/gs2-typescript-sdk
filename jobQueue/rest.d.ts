import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2JobQueueRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    describeJobsByUserId(request: Request.DescribeJobsByUserIdRequest): Promise<Result.DescribeJobsByUserIdResult>;
    getJobByUserId(request: Request.GetJobByUserIdRequest): Promise<Result.GetJobByUserIdResult>;
    pushByUserId(request: Request.PushByUserIdRequest): Promise<Result.PushByUserIdResult>;
    run(request: Request.RunRequest): Promise<Result.RunResult>;
    runByUserId(request: Request.RunByUserIdRequest): Promise<Result.RunByUserIdResult>;
    deleteJobByUserId(request: Request.DeleteJobByUserIdRequest): Promise<Result.DeleteJobByUserIdResult>;
    pushByStampSheet(request: Request.PushByStampSheetRequest): Promise<Result.PushByStampSheetResult>;
    getJobResult(request: Request.GetJobResultRequest): Promise<Result.GetJobResultResult>;
    getJobResultByUserId(request: Request.GetJobResultByUserIdRequest): Promise<Result.GetJobResultByUserIdResult>;
    describeDeadLetterJobsByUserId(request: Request.DescribeDeadLetterJobsByUserIdRequest): Promise<Result.DescribeDeadLetterJobsByUserIdResult>;
    getDeadLetterJobByUserId(request: Request.GetDeadLetterJobByUserIdRequest): Promise<Result.GetDeadLetterJobByUserIdResult>;
    deleteDeadLetterJobByUserId(request: Request.DeleteDeadLetterJobByUserIdRequest): Promise<Result.DeleteDeadLetterJobByUserIdResult>;
}
