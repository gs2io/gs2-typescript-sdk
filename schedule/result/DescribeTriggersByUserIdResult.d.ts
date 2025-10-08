import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class DescribeTriggersByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Schedule.Trigger[] | null;
    setItems(items: Gs2Schedule.Trigger[] | null): this;
    withItems(items: Gs2Schedule.Trigger[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeTriggersByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
