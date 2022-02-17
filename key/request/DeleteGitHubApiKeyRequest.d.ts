import IRequest from '../../core/interface/IRequest';
export default class DeleteGitHubApiKeyRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private apiKeyName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getApiKeyName(): string | null;
    setApiKeyName(apiKeyName: string | null): this;
    withApiKeyName(apiKeyName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteGitHubApiKeyRequest;
    toDict(): {
        [key: string]: any;
    };
}
