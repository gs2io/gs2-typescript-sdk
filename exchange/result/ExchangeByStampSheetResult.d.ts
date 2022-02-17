import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class ExchangeByStampSheetResult implements IResult {
    private item;
    private stampSheet;
    private stampSheetEncryptionKeyId;
    getItem(): Gs2Exchange.RateModel | null;
    setItem(item: Gs2Exchange.RateModel | null): this;
    withItem(item: Gs2Exchange.RateModel | null): this;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
