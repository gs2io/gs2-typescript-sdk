import IRequest from '../../core/interface/IRequest';
export default class PredictionRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private lotteryName;
    private accessToken;
    private randomSeed;
    private count;
    private duplicationAvoider;
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
    getRandomSeed(): number | null;
    setRandomSeed(randomSeed: number | null): this;
    withRandomSeed(randomSeed: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PredictionRequest;
    toDict(): {
        [key: string]: any;
    };
}
