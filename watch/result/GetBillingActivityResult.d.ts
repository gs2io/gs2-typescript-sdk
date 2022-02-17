import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetBillingActivityResult implements IResult {
    private item;
    getItem(): Gs2Watch.BillingActivity | null;
    setItem(item: Gs2Watch.BillingActivity | null): this;
    withItem(item: Gs2Watch.BillingActivity | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBillingActivityResult;
    toDict(): {
        [key: string]: any;
    };
}
