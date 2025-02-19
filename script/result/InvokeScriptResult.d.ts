import IResult from '../../core/interface/IResult';
import * as Gs2Script from '../model';
import * as Gs2Core from '../../core';
export default class InvokeScriptResult implements IResult {
    private code;
    private result;
    private transaction;
    private randomStatus;
    private atomicCommit;
    private transactionResult;
    private executeTime;
    private charged;
    private output;
    getCode(): number | null;
    setCode(code: number | null): this;
    withCode(code: number | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    getTransaction(): Gs2Script.Transaction | null;
    setTransaction(transaction: Gs2Script.Transaction | null): this;
    withTransaction(transaction: Gs2Script.Transaction | null): this;
    getRandomStatus(): Gs2Script.RandomStatus | null;
    setRandomStatus(randomStatus: Gs2Script.RandomStatus | null): this;
    withRandomStatus(randomStatus: Gs2Script.RandomStatus | null): this;
    getAtomicCommit(): boolean | null;
    setAtomicCommit(atomicCommit: boolean | null): this;
    withAtomicCommit(atomicCommit: boolean | null): this;
    getTransactionResult(): Gs2Core.TransactionResult | null;
    setTransactionResult(transactionResult: Gs2Core.TransactionResult | null): this;
    withTransactionResult(transactionResult: Gs2Core.TransactionResult | null): this;
    getExecuteTime(): number | null;
    setExecuteTime(executeTime: number | null): this;
    withExecuteTime(executeTime: number | null): this;
    getCharged(): number | null;
    setCharged(charged: number | null): this;
    withCharged(charged: number | null): this;
    getOutput(): string[] | null;
    setOutput(output: string[] | null): this;
    withOutput(output: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InvokeScriptResult;
    toDict(): {
        [key: string]: any;
    };
}
