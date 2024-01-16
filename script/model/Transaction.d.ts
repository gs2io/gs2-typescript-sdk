import IModel from '../../core/interface/IModel';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
export default class Transaction implements IModel {
    private transactionId;
    private consumeActions;
    private acquireActions;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getConsumeActions(): ConsumeAction[] | null;
    setConsumeActions(consumeActions: ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: ConsumeAction[] | null): this;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Transaction | null;
    toDict(): {
        [key: string]: any;
    };
}
