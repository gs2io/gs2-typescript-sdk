import IRequest from '../../core/interface/IRequest';
export default class GetBillingsRequest implements IRequest {
    private requestId;
    private contextStack;
    private year;
    private month;
    private service;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBillingsRequest;
    toDict(): {
        [key: string]: any;
    };
}
