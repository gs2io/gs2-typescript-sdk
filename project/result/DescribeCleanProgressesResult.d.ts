import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DescribeCleanProgressesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Project.CleanProgress[] | null;
    setItems(items: Gs2Project.CleanProgress[] | null): this;
    withItems(items: Gs2Project.CleanProgress[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCleanProgressesResult;
    toDict(): {
        [key: string]: any;
    };
}
