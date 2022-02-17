import IResult from '../../core/interface/IResult';
export default class StartResult implements IResult {
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
    }): StartResult;
    toDict(): {
        [key: string]: any;
    };
}
