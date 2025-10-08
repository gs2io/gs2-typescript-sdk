import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class DescribeNamespacesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2SerialKey.Namespace[] | null;
    setItems(items: Gs2SerialKey.Namespace[] | null): this;
    withItems(items: Gs2SerialKey.Namespace[] | null): this;
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
