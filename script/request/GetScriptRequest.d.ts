import IRequest from '../../core/interface/IRequest';
export default class GetScriptRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private scriptName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getScriptName(): string | null;
    setScriptName(scriptName: string | null): this;
    withScriptName(scriptName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetScriptRequest;
    toDict(): {
        [key: string]: any;
    };
}
