import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2LockRestClient extends AbstractGs2RestClient {
    static ENDPOINT_HOST: string | null;
    constructor(session: Gs2RestSession);
    describeNamespaces(request: Request.DescribeNamespacesRequest): Promise<Result.DescribeNamespacesResult>;
    createNamespace(request: Request.CreateNamespaceRequest): Promise<Result.CreateNamespaceResult>;
    getNamespaceStatus(request: Request.GetNamespaceStatusRequest): Promise<Result.GetNamespaceStatusResult>;
    getNamespace(request: Request.GetNamespaceRequest): Promise<Result.GetNamespaceResult>;
    updateNamespace(request: Request.UpdateNamespaceRequest): Promise<Result.UpdateNamespaceResult>;
    deleteNamespace(request: Request.DeleteNamespaceRequest): Promise<Result.DeleteNamespaceResult>;
    getServiceVersion(request: Request.GetServiceVersionRequest): Promise<Result.GetServiceVersionResult>;
    lock(request: Request.LockRequest): Promise<Result.LockResult>;
    lockByUserId(request: Request.LockByUserIdRequest): Promise<Result.LockByUserIdResult>;
    unlock(request: Request.UnlockRequest): Promise<Result.UnlockResult>;
    unlockByUserId(request: Request.UnlockByUserIdRequest): Promise<Result.UnlockByUserIdResult>;
    getMutex(request: Request.GetMutexRequest): Promise<Result.GetMutexResult>;
    getMutexByUserId(request: Request.GetMutexByUserIdRequest): Promise<Result.GetMutexByUserIdResult>;
    deleteMutexByUserId(request: Request.DeleteMutexByUserIdRequest): Promise<Result.DeleteMutexByUserIdResult>;
}
