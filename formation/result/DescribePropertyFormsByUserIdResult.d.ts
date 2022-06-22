import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribePropertyFormsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Formation.PropertyForm[] | null;
    setItems(items: Gs2Formation.PropertyForm[] | null): this;
    withItems(items: Gs2Formation.PropertyForm[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePropertyFormsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
