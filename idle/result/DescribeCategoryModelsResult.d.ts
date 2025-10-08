import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class DescribeCategoryModelsResult implements IResult {
    private items;
    getItems(): Gs2Idle.CategoryModel[] | null;
    setItems(items: Gs2Idle.CategoryModel[] | null): this;
    withItems(items: Gs2Idle.CategoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCategoryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
