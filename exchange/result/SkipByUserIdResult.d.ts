import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class SkipByUserIdResult implements IResult {
    private item;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItem(): Gs2Exchange.Await | null;
    setItem(item: Gs2Exchange.Await | null): this;
    withItem(item: Gs2Exchange.Await | null): this;
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
    }): SkipByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
