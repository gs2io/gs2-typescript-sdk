import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class DescribeLimitModelsResult implements IResult {
    private items;
    getItems(): Gs2Limit.LimitModel[] | null;
    setItems(items: Gs2Limit.LimitModel[] | null): this;
    withItems(items: Gs2Limit.LimitModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLimitModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
