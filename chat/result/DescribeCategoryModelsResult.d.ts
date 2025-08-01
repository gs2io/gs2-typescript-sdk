import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeCategoryModelsResult implements IResult {
    private items;
    getItems(): Gs2Chat.CategoryModel[] | null;
    setItems(items: Gs2Chat.CategoryModel[] | null): this;
    withItems(items: Gs2Chat.CategoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCategoryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
