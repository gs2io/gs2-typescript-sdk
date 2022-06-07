import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class ReadMessageByUserIdResult implements IResult {
    private item;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItem(): Gs2Inbox.Message | null;
    setItem(item: Gs2Inbox.Message | null): this;
    withItem(item: Gs2Inbox.Message | null): this;
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
    }): ReadMessageByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
