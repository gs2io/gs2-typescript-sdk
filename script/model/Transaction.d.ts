import IModel from '../../core/interface/IModel';
import * as Gs2Script from '../../script/model';
export default class Transaction implements IModel {
    private transactionId;
    private verifyActions;
    private consumeActions;
    private acquireActions;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getVerifyActions(): Gs2Script.VerifyAction[] | null;
    setVerifyActions(verifyActions: Gs2Script.VerifyAction[] | null): this;
    withVerifyActions(verifyActions: Gs2Script.VerifyAction[] | null): this;
    getConsumeActions(): Gs2Script.ConsumeAction[] | null;
    setConsumeActions(consumeActions: Gs2Script.ConsumeAction[] | null): this;
    withConsumeActions(consumeActions: Gs2Script.ConsumeAction[] | null): this;
    getAcquireActions(): Gs2Script.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Script.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Script.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Transaction | null;
    toDict(): {
        [key: string]: any;
    };
}
