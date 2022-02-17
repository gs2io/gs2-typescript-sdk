import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DescribeReceiptsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Project.Receipt[] | null;
    setItems(items: Gs2Project.Receipt[] | null): this;
    withItems(items: Gs2Project.Receipt[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeReceiptsResult;
    toDict(): {
        [key: string]: any;
    };
}
