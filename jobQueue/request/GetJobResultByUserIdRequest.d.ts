import IRequest from '../../core/interface/IRequest';
export default class GetJobResultByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private jobName;
    private tryNumber;
    private timeOffsetToken;
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
    getJobName(): string | null;
    setJobName(jobName: string | null): this;
    withJobName(jobName: string | null): this;
    getTryNumber(): number | null;
    setTryNumber(tryNumber: number | null): this;
    withTryNumber(tryNumber: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJobResultByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
