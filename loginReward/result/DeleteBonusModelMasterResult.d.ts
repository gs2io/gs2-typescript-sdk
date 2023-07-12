import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class DeleteBonusModelMasterResult implements IResult {
    private item;
    getItem(): Gs2LoginReward.BonusModelMaster | null;
    setItem(item: Gs2LoginReward.BonusModelMaster | null): this;
    withItem(item: Gs2LoginReward.BonusModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteBonusModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
