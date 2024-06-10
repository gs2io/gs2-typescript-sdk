import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class ReceiveByStampSheetResult implements IResult {
    private items;
    private status;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItems(): Gs2Idle.AcquireAction[] | null;
    setItems(items: Gs2Idle.AcquireAction[] | null): this;
    withItems(items: Gs2Idle.AcquireAction[] | null): this;
    getStatus(): Gs2Idle.Status | null;
    setStatus(status: Gs2Idle.Status | null): this;
    withStatus(status: Gs2Idle.Status | null): this;
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
    static fromDict(data: {
        [key: string]: any;
    }): ReceiveByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
