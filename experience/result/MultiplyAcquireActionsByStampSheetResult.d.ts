import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class MultiplyAcquireActionsByStampSheetResult implements IResult {
    private items;
    private transactionId;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    private autoRunStampSheet;
    getItems(): Gs2Experience.AcquireAction[] | null;
    setItems(items: Gs2Experience.AcquireAction[] | null): this;
    withItems(items: Gs2Experience.AcquireAction[] | null): this;
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
    }): MultiplyAcquireActionsByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
