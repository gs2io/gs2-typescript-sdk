import IModel from '../../core/interface/IModel';
export default class GitHubCheckoutSetting implements IModel {
    private apiKeyId;
    private repositoryName;
    private sourcePath;
    private referenceType;
    private commitHash;
    private branchName;
    private tagName;
    getApiKeyId(): string | null;
    setApiKeyId(apiKeyId: string | null): this;
    withApiKeyId(apiKeyId: string | null): this;
    getRepositoryName(): string | null;
    setRepositoryName(repositoryName: string | null): this;
    withRepositoryName(repositoryName: string | null): this;
    getSourcePath(): string | null;
    setSourcePath(sourcePath: string | null): this;
    withSourcePath(sourcePath: string | null): this;
    getReferenceType(): string | null;
    setReferenceType(referenceType: string | null): this;
    withReferenceType(referenceType: string | null): this;
    getCommitHash(): string | null;
    setCommitHash(commitHash: string | null): this;
    withCommitHash(commitHash: string | null): this;
    getBranchName(): string | null;
    setBranchName(branchName: string | null): this;
    withBranchName(branchName: string | null): this;
    getTagName(): string | null;
    setTagName(tagName: string | null): this;
    withTagName(tagName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GitHubCheckoutSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
