import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribeBoxesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Lottery.BoxItems[] | null;
    setItems(items: Gs2Lottery.BoxItems[] | null): this;
    withItems(items: Gs2Lottery.BoxItems[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBoxesResult;
    toDict(): {
        [key: string]: any;
    };
}
