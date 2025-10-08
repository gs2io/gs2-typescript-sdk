import IRequest from '../../core/interface/IRequest';
export default class CreateGitHubApiKeyRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private apiKey;
    private encryptionKeyName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getApiKey(): string | null;
    setApiKey(apiKey: string | null): this;
    withApiKey(apiKey: string | null): this;
    getEncryptionKeyName(): string | null;
    setEncryptionKeyName(encryptionKeyName: string | null): this;
    withEncryptionKeyName(encryptionKeyName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateGitHubApiKeyRequest;
    toDict(): {
        [key: string]: any;
    };
}
