import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class GetCategoryModelResult implements IResult {
    private item;
    getItem(): Gs2Ranking.CategoryModel | null;
    setItem(item: Gs2Ranking.CategoryModel | null): this;
    withItem(item: Gs2Ranking.CategoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCategoryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
