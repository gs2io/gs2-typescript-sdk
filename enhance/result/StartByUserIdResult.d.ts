import IResult from '../../core/interface/IResult';
export default class StartByUserIdResult implements IResult {
    private stampSheet;
    private stampSheetEncryptionKeyId;
    getStampSheet(): string | null;
    setStampSheet(stampSheet: string | null): this;
    withStampSheet(stampSheet: string | null): this;
    getStampSheetEncryptionKeyId(): string | null;
    setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StartByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}