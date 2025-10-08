import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitLimitModelDistributions implements IModel {
    private increase;
    private increaseAmount;
    private increaseByUser;
    private increaseAmountByUser;
    getIncrease(): Gs2Watch.LimitLimitModelIncreaseDistribution | null;
    setIncrease(increase: Gs2Watch.LimitLimitModelIncreaseDistribution | null): this;
    withIncrease(increase: Gs2Watch.LimitLimitModelIncreaseDistribution | null): this;
    getIncreaseAmount(): Gs2Watch.LimitLimitModelIncreaseAmountDistribution | null;
    setIncreaseAmount(increaseAmount: Gs2Watch.LimitLimitModelIncreaseAmountDistribution | null): this;
    withIncreaseAmount(increaseAmount: Gs2Watch.LimitLimitModelIncreaseAmountDistribution | null): this;
    getIncreaseByUser(): Gs2Watch.LimitLimitModelIncreaseByUserDistribution | null;
    setIncreaseByUser(increaseByUser: Gs2Watch.LimitLimitModelIncreaseByUserDistribution | null): this;
    withIncreaseByUser(increaseByUser: Gs2Watch.LimitLimitModelIncreaseByUserDistribution | null): this;
    getIncreaseAmountByUser(): Gs2Watch.LimitLimitModelIncreaseAmountByUserDistribution | null;
    setIncreaseAmountByUser(increaseAmountByUser: Gs2Watch.LimitLimitModelIncreaseAmountByUserDistribution | null): this;
    withIncreaseAmountByUser(increaseAmountByUser: Gs2Watch.LimitLimitModelIncreaseAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
