import IResult from '@/gs2/core/interface/IResult';
import * as Gs2Project from '../model';
export declare class DescribeBillingsResult implements IResult {
    private items;
    getItems(): Gs2Project.Billing[] | null;
    setItems(items: Gs2Project.Billing[] | null): this;
    withItems(items: Gs2Project.Billing[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBillingsResult;
    toDict(): {
        [key: string]: any;
    };
}
