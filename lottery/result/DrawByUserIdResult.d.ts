import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DrawByUserIdResult implements IResult {
    private items;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    getItems(): Gs2Lottery.DrawnPrize[] | null;
    setItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    withItems(items: Gs2Lottery.DrawnPrize[] | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DrawByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
