import IModel from '../../core/interface/IModel';
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
export default class RandomDisplayItemModel implements IModel {
    private name;
    private metadata;
    private verifyActions;
    private consumeActions;
    private acquireActions;
    private stock;
    private weight;
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
    getStock(): number | null;
    setStock(stock: number | null): this;
    withStock(stock: number | null): this;
    getWeight(): number | null;
    setWeight(weight: number | null): this;
    withWeight(weight: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomDisplayItemModel | null;
    toDict(): {
        [key: string]: any;
    };
}
