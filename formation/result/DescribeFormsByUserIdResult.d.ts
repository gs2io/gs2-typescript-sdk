import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribeFormsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Formation.Form[] | null;
    setItems(items: Gs2Formation.Form[] | null): this;
    withItems(items: Gs2Formation.Form[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFormsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
