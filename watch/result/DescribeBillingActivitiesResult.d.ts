import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Watch from '../model';
export declare class DescribeBillingActivitiesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Watch.BillingActivity[] | null;
    setItems(items: Gs2Watch.BillingActivity[] | null): this;
    withItems(items: Gs2Watch.BillingActivity[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBillingActivitiesResult;
    toDict(): {
        [key: string]: any;
    };
}
