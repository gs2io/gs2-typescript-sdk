import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class UpdatePropertyFormModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private propertyFormModelName;
    private description;
    private metadata;
    private slots;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getPropertyFormModelName(): string | null;
    setPropertyFormModelName(propertyFormModelName: string | null): this;
    withPropertyFormModelName(propertyFormModelName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSlots(): Gs2Formation.SlotModel[] | null;
    setSlots(slots: Gs2Formation.SlotModel[] | null): this;
    withSlots(slots: Gs2Formation.SlotModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdatePropertyFormModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
