import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class DescribeReceiptsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Money.Receipt[] | null;
    setItems(items: Gs2Money.Receipt[] | null): this;
    withItems(items: Gs2Money.Receipt[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeReceiptsResult;
    toDict(): {
        [key: string]: any;
    };
}
