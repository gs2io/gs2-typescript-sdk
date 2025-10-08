import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class GetBonusModelResult implements IResult {
    private item;
    getItem(): Gs2LoginReward.BonusModel | null;
    setItem(item: Gs2LoginReward.BonusModel | null): this;
    withItem(item: Gs2LoginReward.BonusModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBonusModelResult;
    toDict(): {
        [key: string]: any;
    };
}
