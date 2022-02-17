import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class CreateSalesItemMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private metadata;
    private consumeActions;
    private acquireActions;
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
    getConsumeActions(): Gs2Showcase.ConsumeAction[] | null;
    setConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[] | null): this;
    getAcquireActions(): Gs2Showcase.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Showcase.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Showcase.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateSalesItemMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
