import IModel from './interface/IModel';
import VerifyActionResult from './VerifyActionResult';
import ConsumeActionResult from './ConsumeActionResult';
import AcquireActionResult from './AcquireActionResult';
export default class TransactionResult implements IModel {
    private transactionId;
    private verifyResults;
    private consumeResults;
    private acquireResults;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getVerifyResults(): VerifyActionResult[] | null;
    setVerifyResults(verifyResults: VerifyActionResult[] | null): this;
    withVerifyResults(verifyResults: VerifyActionResult[] | null): this;
    getConsumeResults(): ConsumeActionResult[] | null;
    setConsumeResults(consumeResults: ConsumeActionResult[] | null): this;
    withConsumeResults(consumeResults: ConsumeActionResult[] | null): this;
    getAcquireResults(): AcquireActionResult[] | null;
    setAcquireResults(acquireResults: AcquireActionResult[] | null): this;
    withAcquireResults(acquireResults: AcquireActionResult[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TransactionResult | null;
    toDict(): {
        [key: string]: any;
    };
}
