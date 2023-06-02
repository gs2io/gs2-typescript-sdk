import IModel from '../../core/interface/IModel';
export default class LimitLimitModelStatistics implements IModel {
    private increase;
    private increaseAmount;
    getIncrease(): number | null;
    setIncrease(increase: number | null): this;
    withIncrease(increase: number | null): this;
    getIncreaseAmount(): number | null;
    setIncreaseAmount(increaseAmount: number | null): this;
    withIncreaseAmount(increaseAmount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
