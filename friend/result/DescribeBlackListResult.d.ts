import IResult from '../../core/interface/IResult';
export default class DescribeBlackListResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): string[] | null;
    setItems(items: string[] | null): this;
    withItems(items: string[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBlackListResult;
    toDict(): {
        [key: string]: any;
    };
}
