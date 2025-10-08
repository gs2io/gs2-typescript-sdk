import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class DescribeIssueJobsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2SerialKey.IssueJob[] | null;
    setItems(items: Gs2SerialKey.IssueJob[] | null): this;
    withItems(items: Gs2SerialKey.IssueJob[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeIssueJobsResult;
    toDict(): {
        [key: string]: any;
    };
}
