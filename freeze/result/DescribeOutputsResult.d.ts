import IResult from '../../core/interface/IResult';
import * as Gs2Freeze from '../model';
export default class DescribeOutputsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Freeze.Output[] | null;
    setItems(items: Gs2Freeze.Output[] | null): this;
    withItems(items: Gs2Freeze.Output[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeOutputsResult;
    toDict(): {
        [key: string]: any;
    };
}
