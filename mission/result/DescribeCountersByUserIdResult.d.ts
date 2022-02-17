import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeCountersByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Mission.Counter[] | null;
    setItems(items: Gs2Mission.Counter[] | null): this;
    withItems(items: Gs2Mission.Counter[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCountersByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
