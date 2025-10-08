import IRequest from '../../core/interface/IRequest';
export default class GetRarityParameterModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private parameterName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getParameterName(): string | null;
    setParameterName(parameterName: string | null): this;
    withParameterName(parameterName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRarityParameterModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
