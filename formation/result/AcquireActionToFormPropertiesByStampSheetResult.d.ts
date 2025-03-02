import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
import * as Gs2Core from '../../core';
export default class AcquireActionToFormPropertiesByStampSheetResult implements IResult {
    private item;
    private mold;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    private atomicCommit;
    private transaction;
    private transactionResult;
    getItem(): Gs2Formation.Form | null;
    setItem(item: Gs2Formation.Form | null): this;
    withItem(item: Gs2Formation.Form | null): this;
    getMold(): Gs2Formation.Mold | null;
    setMold(mold: Gs2Formation.Mold | null): this;
    withMold(mold: Gs2Formation.Mold | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    getAutoRunStampSheet(): boolean | null;
    setAutoRunStampSheet(autoRunStampSheet: boolean | null): this;
    withAutoRunStampSheet(autoRunStampSheet: boolean | null): this;
    getAtomicCommit(): boolean | null;
    setAtomicCommit(atomicCommit: boolean | null): this;
    withAtomicCommit(atomicCommit: boolean | null): this;
    getTransaction(): string | null;
    setTransaction(transaction: string | null): this;
    withTransaction(transaction: string | null): this;
    getTransactionResult(): Gs2Core.TransactionResult | null;
    setTransactionResult(transactionResult: Gs2Core.TransactionResult | null): this;
    withTransactionResult(transactionResult: Gs2Core.TransactionResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionToFormPropertiesByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
