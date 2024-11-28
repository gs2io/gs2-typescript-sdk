import IModel from '../../core/interface/IModel';
import * as Gs2LoginReward from '../../loginReward/model';
export default class Reward implements IModel {
    private acquireActions;
    getAcquireActions(): Gs2LoginReward.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2LoginReward.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2LoginReward.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Reward | null;
    toDict(): {
        [key: string]: any;
    };
}
