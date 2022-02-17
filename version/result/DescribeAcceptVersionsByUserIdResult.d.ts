import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class DescribeAcceptVersionsByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Version.AcceptVersion[] | null;
    setItems(items: Gs2Version.AcceptVersion[] | null): this;
    withItems(items: Gs2Version.AcceptVersion[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeAcceptVersionsByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
