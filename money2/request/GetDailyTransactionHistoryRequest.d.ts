import IRequest from '../../core/interface/IRequest';
export default class GetDailyTransactionHistoryRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private year;
    private month;
    private day;
    private currency;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getDay(): number | null;
    setDay(day: number | null): this;
    withDay(day: number | null): this;
    getCurrency(): string | null;
    setCurrency(currency: string | null): this;
    withCurrency(currency: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDailyTransactionHistoryRequest;
    toDict(): {
        [key: string]: any;
    };
}
