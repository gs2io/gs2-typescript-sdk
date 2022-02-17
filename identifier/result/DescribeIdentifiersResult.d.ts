import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class DescribeIdentifiersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Identifier.Identifier[] | null;
    setItems(items: Gs2Identifier.Identifier[] | null): this;
    withItems(items: Gs2Identifier.Identifier[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeIdentifiersResult;
    toDict(): {
        [key: string]: any;
    };
}
