import IModel from '../../core/interface/IModel';
export default class JobResult implements IModel {
    private jobResultId;
    private jobId;
    private tryNumber;
    private statusCode;
    private result;
    private tryAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getJobName(grn: string): string | null;
    static getTryNumber(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, jobName: string | null, tryNumber: string | null): string | null;
    getJobResultId(): string | null;
    setJobResultId(jobResultId: string | null): this;
    withJobResultId(jobResultId: string | null): this;
    getJobId(): string | null;
    setJobId(jobId: string | null): this;
    withJobId(jobId: string | null): this;
    getTryNumber(): number | null;
    setTryNumber(tryNumber: number | null): this;
    withTryNumber(tryNumber: number | null): this;
    getStatusCode(): number | null;
    setStatusCode(statusCode: number | null): this;
    withStatusCode(statusCode: number | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    getTryAt(): number | null;
    setTryAt(tryAt: number | null): this;
    withTryAt(tryAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): JobResult | null;
    toDict(): {
        [key: string]: any;
    };
}
