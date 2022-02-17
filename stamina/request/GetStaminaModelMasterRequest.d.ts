import IRequest from '../../core/interface/IRequest';
export default class GetStaminaModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private staminaName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStaminaModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
