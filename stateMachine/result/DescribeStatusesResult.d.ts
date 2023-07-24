import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class DescribeStatusesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2StateMachine.Status[] | null;
    setItems(items: Gs2StateMachine.Status[] | null): this;
    withItems(items: Gs2StateMachine.Status[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStatusesResult;
    toDict(): {
        [key: string]: any;
    };
}
