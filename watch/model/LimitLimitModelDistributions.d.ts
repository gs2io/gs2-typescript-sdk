import IModel from '../../core/interface/IModel';
import LimitLimitModelIncreaseDistribution from './LimitLimitModelIncreaseDistribution';
import LimitLimitModelIncreaseAmountDistribution from './LimitLimitModelIncreaseAmountDistribution';
import LimitLimitModelIncreaseByUserDistribution from './LimitLimitModelIncreaseByUserDistribution';
import LimitLimitModelIncreaseAmountByUserDistribution from './LimitLimitModelIncreaseAmountByUserDistribution';
export default class LimitLimitModelDistributions implements IModel {
    private increase;
    private increaseAmount;
    private increaseByUser;
    private increaseAmountByUser;
    getIncrease(): LimitLimitModelIncreaseDistribution | null;
    setIncrease(increase: LimitLimitModelIncreaseDistribution | null): this;
    withIncrease(increase: LimitLimitModelIncreaseDistribution | null): this;
    getIncreaseAmount(): LimitLimitModelIncreaseAmountDistribution | null;
    setIncreaseAmount(increaseAmount: LimitLimitModelIncreaseAmountDistribution | null): this;
    withIncreaseAmount(increaseAmount: LimitLimitModelIncreaseAmountDistribution | null): this;
    getIncreaseByUser(): LimitLimitModelIncreaseByUserDistribution | null;
    setIncreaseByUser(increaseByUser: LimitLimitModelIncreaseByUserDistribution | null): this;
    withIncreaseByUser(increaseByUser: LimitLimitModelIncreaseByUserDistribution | null): this;
    getIncreaseAmountByUser(): LimitLimitModelIncreaseAmountByUserDistribution | null;
    setIncreaseAmountByUser(increaseAmountByUser: LimitLimitModelIncreaseAmountByUserDistribution | null): this;
    withIncreaseAmountByUser(increaseAmountByUser: LimitLimitModelIncreaseAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
