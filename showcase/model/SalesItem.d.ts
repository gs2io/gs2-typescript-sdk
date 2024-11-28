import IModel from '../../core/interface/IModel';
import * as Gs2Showcase from '../../showcase/model';
export default class SalesItem implements IModel {
    private name;
    private metadata;
    private verifyActions;
    private consumeActions;
    private acquireActions;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getVerifyActions(): Gs2Showcase.VerifyAction[] | null;
    setVerifyActions(verifyActions: Gs2Showcase.VerifyAction[] | null): this;
    withVerifyActions(verifyActions: Gs2Showcase.VerifyAction[] | null): this;
    getConsumeActions(): Gs2Showcase.ConsumeAction[] | null;
    setConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: Gs2Showcase.ConsumeAction[] | null): this;
    getAcquireActions(): Gs2Showcase.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Showcase.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Showcase.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SalesItem | null;
    toDict(): {
        [key: string]: any;
    };
}
