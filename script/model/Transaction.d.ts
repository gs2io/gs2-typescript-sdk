import IModel from '../../core/interface/IModel';
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
export default class Transaction implements IModel {
    private transactionId;
    private verifyActions;
    private consumeActions;
    private acquireActions;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getVerifyActions(): VerifyAction[] | null;
    setVerifyActions(verifyActions: VerifyAction[] | null): this;
    withVerifyActions(verifyActions: VerifyAction[] | null): this;
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
