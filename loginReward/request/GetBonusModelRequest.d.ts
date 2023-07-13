import IRequest from '../../core/interface/IRequest';
export default class GetBonusModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private bonusModelName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getBonusModelName(): string | null;
    setBonusModelName(bonusModelName: string | null): this;
    withBonusModelName(bonusModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBonusModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
