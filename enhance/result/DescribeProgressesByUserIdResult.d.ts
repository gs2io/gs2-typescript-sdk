import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DescribeProgressesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Enhance.Progress[] | null;
    setItems(items: Gs2Enhance.Progress[] | null): this;
    withItems(items: Gs2Enhance.Progress[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProgressesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
