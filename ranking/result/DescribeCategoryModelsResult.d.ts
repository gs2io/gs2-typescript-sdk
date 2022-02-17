import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class DescribeCategoryModelsResult implements IResult {
    private items;
    getItems(): Gs2Ranking.CategoryModel[] | null;
    setItems(items: Gs2Ranking.CategoryModel[] | null): this;
    withItems(items: Gs2Ranking.CategoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCategoryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
