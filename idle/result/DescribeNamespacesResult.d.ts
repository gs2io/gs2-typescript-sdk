import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class DescribeNamespacesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Idle.Namespace[] | null;
    setItems(items: Gs2Idle.Namespace[] | null): this;
    withItems(items: Gs2Idle.Namespace[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNamespacesResult;
    toDict(): {
        [key: string]: any;
    };
}
