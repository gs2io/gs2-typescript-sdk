import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class AllocateSubscriptionStatusByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Money2.SubscriptionStatus | null;
    setItem(item: Gs2Money2.SubscriptionStatus | null): this;
    withItem(item: Gs2Money2.SubscriptionStatus | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AllocateSubscriptionStatusByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
