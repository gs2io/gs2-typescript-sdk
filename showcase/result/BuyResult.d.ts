import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class BuyResult implements IResult {
    private item;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    getItem(): Gs2Showcase.SalesItem | null;
    setItem(item: Gs2Showcase.SalesItem | null): this;
    withItem(item: Gs2Showcase.SalesItem | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BuyResult;
    toDict(): {
        [key: string]: any;
    };
}
