import IRequest from '../../core/interface/IRequest';
export default class GetGlobalRankingModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rankingName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRankingName(): string | null;
    setRankingName(rankingName: string | null): this;
    withRankingName(rankingName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalRankingModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
