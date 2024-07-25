import IModel from '../../core/interface/IModel';
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
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
    getVerifyActions(): VerifyAction[] | null;
    setVerifyActions(verifyActions: VerifyAction[] | null): this;
    withVerifyActions(verifyActions: VerifyAction[] | null): this;
    getConsumeActions(): ConsumeAction[] | null;
    setConsumeActions(consumeActions: ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: ConsumeAction[] | null): this;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
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
