import IResult from '../../core/interface/IResult';
export default class DownloadSerialCodesResult implements IResult {
    private url;
    getUrl(): string | null;
    setUrl(url: string | null): this;
    withUrl(url: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DownloadSerialCodesResult;
    toDict(): {
        [key: string]: any;
    };
}
