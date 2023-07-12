import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class MarkReceivedByStampTaskResult implements IResult {
    private item;
    private bonusModel;
    private newContextStack;
    getItem(): Gs2LoginReward.ReceiveStatus | null;
    setItem(item: Gs2LoginReward.ReceiveStatus | null): this;
    withItem(item: Gs2LoginReward.ReceiveStatus | null): this;
    getBonusModel(): Gs2LoginReward.BonusModel | null;
    setBonusModel(bonusModel: Gs2LoginReward.BonusModel | null): this;
    withBonusModel(bonusModel: Gs2LoginReward.BonusModel | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MarkReceivedByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
