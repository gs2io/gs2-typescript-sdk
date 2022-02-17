import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DescribeProjectsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Project.Project[] | null;
    setItems(items: Gs2Project.Project[] | null): this;
    withItems(items: Gs2Project.Project[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeProjectsResult;
    toDict(): {
        [key: string]: any;
    };
}
