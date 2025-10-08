import IRequest from '../../core/interface/IRequest';
export default class UpdateRecoverIntervalTableMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private recoverIntervalTableName;
    private description;
    private metadata;
    private experienceModelId;
    private values;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRecoverIntervalTableName(): string | null;
    setRecoverIntervalTableName(recoverIntervalTableName: string | null): this;
    withRecoverIntervalTableName(recoverIntervalTableName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getExperienceModelId(): string | null;
    setExperienceModelId(experienceModelId: string | null): this;
    withExperienceModelId(experienceModelId: string | null): this;
    getValues(): number[] | null;
    setValues(values: number[] | null): this;
    withValues(values: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateRecoverIntervalTableMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
