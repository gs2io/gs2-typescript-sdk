import IRequest from '../../core/interface/IRequest';
export default class DescribeProbabilitiesRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private lotteryName;
    private accessToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getLotteryName(): string | null;
    setLotteryName(lotteryName: string | null): this;
    withLotteryName(lotteryName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProbabilitiesRequest;
    toDict(): {
        [key: string]: any;
    };
}
