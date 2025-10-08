import IModel from '../../core/interface/IModel';
import * as Gs2Showcase from '../../showcase/model';
export default class RandomDisplayItem implements IModel {
    private showcaseName;
    private name;
    private metadata;
    private verifyActions;
    private consumeActions;
    private acquireActions;
    private currentPurchaseCount;
    private maximumPurchaseCount;
    getShowcaseName(): string | null;
    setShowcaseName(showcaseName: string | null): this;
    withShowcaseName(showcaseName: string | null): this;
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
    getCurrentPurchaseCount(): number | null;
    setCurrentPurchaseCount(currentPurchaseCount: number | null): this;
    withCurrentPurchaseCount(currentPurchaseCount: number | null): this;
    getMaximumPurchaseCount(): number | null;
    setMaximumPurchaseCount(maximumPurchaseCount: number | null): this;
    withMaximumPurchaseCount(maximumPurchaseCount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomDisplayItem | null;
    toDict(): {
        [key: string]: any;
    };
}
