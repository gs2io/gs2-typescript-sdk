import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class GetCategoryModelResult implements IResult {
    private item;
    getItem(): Gs2Idle.CategoryModel | null;
    setItem(item: Gs2Idle.CategoryModel | null): this;
    withItem(item: Gs2Idle.CategoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCategoryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
