import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class UpdateCurrentBonusMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2LoginReward.CurrentBonusMaster | null;
    setItem(item: Gs2LoginReward.CurrentBonusMaster | null): this;
    withItem(item: Gs2LoginReward.CurrentBonusMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentBonusMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
