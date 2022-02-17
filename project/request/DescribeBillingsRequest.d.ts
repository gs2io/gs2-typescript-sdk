import IRequest from '@/gs2/core/interface/IRequest';
export declare class DescribeBillingsRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountToken;
    private projectName;
    private year;
    private month;
    private region;
    private service;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    getProjectName(): string | null;
    setProjectName(projectName: string | null): this;
    withProjectName(projectName: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getRegion(): string | null;
    setRegion(region: string | null): this;
    withRegion(region: string | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBillingsRequest;
    toDict(): {
        [key: string]: any;
    };
}
