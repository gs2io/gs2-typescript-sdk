import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DescribeImportProgressesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Project.ImportProgress[] | null;
    setItems(items: Gs2Project.ImportProgress[] | null): this;
    withItems(items: Gs2Project.ImportProgress[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeImportProgressesResult;
    toDict(): {
        [key: string]: any;
    };
}
