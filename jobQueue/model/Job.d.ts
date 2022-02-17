import IModel from '../../core/interface/IModel';
export default class Job implements IModel {
    private jobId;
    private name;
    private userId;
    private scriptId;
    private args;
    private currentRetryCount;
    private maxTryCount;
    private createdAt;
    private updatedAt;
    getJobId(): string | null;
    setJobId(jobId: string | null): this;
    withJobId(jobId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getCurrentRetryCount(): number | null;
    setCurrentRetryCount(currentRetryCount: number | null): this;
    withCurrentRetryCount(currentRetryCount: number | null): this;
    getMaxTryCount(): number | null;
    setMaxTryCount(maxTryCount: number | null): this;
    withMaxTryCount(maxTryCount: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Job | null;
    toDict(): {
        [key: string]: any;
    };
}
