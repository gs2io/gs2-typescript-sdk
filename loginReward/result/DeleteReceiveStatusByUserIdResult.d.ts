import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class DeleteReceiveStatusByUserIdResult implements IResult {
    private item;
    private bonusModel;
    getItem(): Gs2LoginReward.ReceiveStatus | null;
    setItem(item: Gs2LoginReward.ReceiveStatus | null): this;
    withItem(item: Gs2LoginReward.ReceiveStatus | null): this;
    getBonusModel(): Gs2LoginReward.BonusModel | null;
    setBonusModel(bonusModel: Gs2LoginReward.BonusModel | null): this;
    withBonusModel(bonusModel: Gs2LoginReward.BonusModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteReceiveStatusByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}