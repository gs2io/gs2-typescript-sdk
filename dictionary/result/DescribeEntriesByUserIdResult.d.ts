import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DescribeEntriesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Dictionary.Entry[] | null;
    setItems(items: Gs2Dictionary.Entry[] | null): this;
    withItems(items: Gs2Dictionary.Entry[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeEntriesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
