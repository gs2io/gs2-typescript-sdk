import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class GetCategoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Ranking.CategoryModelMaster | null;
    setItem(item: Gs2Ranking.CategoryModelMaster | null): this;
    withItem(item: Gs2Ranking.CategoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCategoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
