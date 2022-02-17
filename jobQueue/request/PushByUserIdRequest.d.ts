import IRequest from '../../core/interface/IRequest';
import * as Gs2JobQueue from '../model';
export default class PushByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private jobs;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getJobs(): Gs2JobQueue.JobEntry[] | null;
    setJobs(jobs: Gs2JobQueue.JobEntry[] | null): this;
    withJobs(jobs: Gs2JobQueue.JobEntry[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PushByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
