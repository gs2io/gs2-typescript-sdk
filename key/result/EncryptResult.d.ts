import IResult from '../../core/interface/IResult';
export default class EncryptResult implements IResult {
    private data;
    getData(): string | null;
    setData(data: string | null): this;
    withData(data: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EncryptResult;
    toDict(): {
        [key: string]: any;
    };
}
