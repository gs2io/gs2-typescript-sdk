import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class DescribePasswordsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Identifier.Password[] | null;
    setItems(items: Gs2Identifier.Password[] | null): this;
    withItems(items: Gs2Identifier.Password[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePasswordsResult;
    toDict(): {
        [key: string]: any;
    };
}
