import IModel from '../../core/interface/IModel';
export default class GitHubApiKey implements IModel {
    private apiKeyId;
    private name;
    private description;
    private encryptionKeyName;
    private createdAt;
    private updatedAt;
    getApiKeyId(): string | null;
    setApiKeyId(apiKeyId: string | null): this;
    withApiKeyId(apiKeyId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getEncryptionKeyName(): string | null;
    setEncryptionKeyName(encryptionKeyName: string | null): this;
    withEncryptionKeyName(encryptionKeyName: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GitHubApiKey | null;
    toDict(): {
        [key: string]: any;
    };
}
