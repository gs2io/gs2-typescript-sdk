import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class GetCategoryModelResult implements IResult {
    private item;
    getItem(): Gs2Chat.CategoryModel | null;
    setItem(item: Gs2Chat.CategoryModel | null): this;
    withItem(item: Gs2Chat.CategoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCategoryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
