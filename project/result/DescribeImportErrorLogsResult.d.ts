import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DescribeImportErrorLogsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Project.ImportErrorLog[] | null;
    setItems(items: Gs2Project.ImportErrorLog[] | null): this;
    withItems(items: Gs2Project.ImportErrorLog[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeImportErrorLogsResult;
    toDict(): {
        [key: string]: any;
    };
}
