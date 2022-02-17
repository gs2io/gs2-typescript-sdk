import IResult from '../../core/interface/IResult';
import * as Gs2Script from '../model';
export default class DescribeScriptsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Script.Script[] | null;
    setItems(items: Gs2Script.Script[] | null): this;
    withItems(items: Gs2Script.Script[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeScriptsResult;
    toDict(): {
        [key: string]: any;
    };
}
