import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class CreateUnleashRateModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private targetInventoryModelId;
    private gradeModelId;
    private gradeEntries;
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
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getTargetInventoryModelId(): string | null;
    setTargetInventoryModelId(targetInventoryModelId: string | null): this;
    withTargetInventoryModelId(targetInventoryModelId: string | null): this;
    getGradeModelId(): string | null;
    setGradeModelId(gradeModelId: string | null): this;
    withGradeModelId(gradeModelId: string | null): this;
    getGradeEntries(): Gs2Enhance.UnleashRateEntryModel[] | null;
    setGradeEntries(gradeEntries: Gs2Enhance.UnleashRateEntryModel[] | null): this;
    withGradeEntries(gradeEntries: Gs2Enhance.UnleashRateEntryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateUnleashRateModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
