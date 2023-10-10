import IResult from '../../core/interface/IResult';
export default class CheckDumpUserDataByUserIdResult implements IResult {
    private url;
    getUrl(): string | null;
    setUrl(url: string | null): this;
    withUrl(url: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CheckDumpUserDataByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
