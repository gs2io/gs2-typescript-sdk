import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DescribeSubscriptionStatusesByUserIdResult implements IResult {
    private items;
    getItems(): Gs2Money2.SubscriptionStatus[] | null;
    setItems(items: Gs2Money2.SubscriptionStatus[] | null): this;
    withItems(items: Gs2Money2.SubscriptionStatus[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSubscriptionStatusesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
