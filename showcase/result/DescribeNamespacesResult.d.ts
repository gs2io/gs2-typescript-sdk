import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DescribeNamespacesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Showcase.Namespace[] | null;
    setItems(items: Gs2Showcase.Namespace[] | null): this;
    withItems(items: Gs2Showcase.Namespace[] | null): this;
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
