import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class DeleteBillingMethodResult implements IResult {
    private item;
    getItem(): Gs2Project.BillingMethod | null;
    setItem(item: Gs2Project.BillingMethod | null): this;
    withItem(item: Gs2Project.BillingMethod | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteBillingMethodResult;
    toDict(): {
        [key: string]: any;
    };
}
