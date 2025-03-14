import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeRefundHistoriesByUserIdResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Money2.RefundHistory[] | null;
    setItems(items: Gs2Money2.RefundHistory[] | null): this;
    withItems(items: Gs2Money2.RefundHistory[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRefundHistoriesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
