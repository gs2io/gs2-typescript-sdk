import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2AdRewardRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    dumpUserDataByUserId(request: Request.DumpUserDataByUserIdRequest): Promise<Result.DumpUserDataByUserIdResult>;
    checkDumpUserDataByUserId(request: Request.CheckDumpUserDataByUserIdRequest): Promise<Result.CheckDumpUserDataByUserIdResult>;
    cleanUserDataByUserId(request: Request.CleanUserDataByUserIdRequest): Promise<Result.CleanUserDataByUserIdResult>;
    checkCleanUserDataByUserId(request: Request.CheckCleanUserDataByUserIdRequest): Promise<Result.CheckCleanUserDataByUserIdResult>;
    getPoint(request: Request.GetPointRequest): Promise<Result.GetPointResult>;
    getPointByUserId(request: Request.GetPointByUserIdRequest): Promise<Result.GetPointByUserIdResult>;
    acquirePointByUserId(request: Request.AcquirePointByUserIdRequest): Promise<Result.AcquirePointByUserIdResult>;
    consumePoint(request: Request.ConsumePointRequest): Promise<Result.ConsumePointResult>;
    consumePointByUserId(request: Request.ConsumePointByUserIdRequest): Promise<Result.ConsumePointByUserIdResult>;
    deletePointByUserId(request: Request.DeletePointByUserIdRequest): Promise<Result.DeletePointByUserIdResult>;
    consumePointByStampTask(request: Request.ConsumePointByStampTaskRequest): Promise<Result.ConsumePointByStampTaskResult>;
    acquirePointByStampSheet(request: Request.AcquirePointByStampSheetRequest): Promise<Result.AcquirePointByStampSheetResult>;
}
