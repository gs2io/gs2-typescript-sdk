import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class GetBillingsResult implements IResult {
    private items;
    getItems(): Gs2Project.Billing[] | null;
    setItems(items: Gs2Project.Billing[] | null): this;
    withItems(items: Gs2Project.Billing[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBillingsResult;
    toDict(): {
        [key: string]: any;
    };
}
