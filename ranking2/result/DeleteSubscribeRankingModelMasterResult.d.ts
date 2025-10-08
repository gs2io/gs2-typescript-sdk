import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class DeleteSubscribeRankingModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.SubscribeRankingModelMaster | null;
    setItem(item: Gs2Ranking2.SubscribeRankingModelMaster | null): this;
    withItem(item: Gs2Ranking2.SubscribeRankingModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSubscribeRankingModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
