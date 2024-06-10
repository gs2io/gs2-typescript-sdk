import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class UpdateGlobalRankingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.GlobalRankingModelMaster | null;
    setItem(item: Gs2Ranking2.GlobalRankingModelMaster | null): this;
    withItem(item: Gs2Ranking2.GlobalRankingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateGlobalRankingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
