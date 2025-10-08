import IResult from '../../core/interface/IResult';
export default class DecryptResult implements IResult {
    private data;
    getData(): string | null;
    setData(data: string | null): this;
    withData(data: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecryptResult;
    toDict(): {
        [key: string]: any;
    };
}
