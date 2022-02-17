import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class DescribeAcceptVersionsResult implements IResult {
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
    }): DescribeAcceptVersionsResult;
    toDict(): {
        [key: string]: any;
    };
}
