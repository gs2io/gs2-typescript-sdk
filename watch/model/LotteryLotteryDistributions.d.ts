import IModel from '../../core/interface/IModel';
import LotteryLotteryDrawResultDistribution from './LotteryLotteryDrawResultDistribution';
export default class LotteryLotteryDistributions implements IModel {
    private drawResult;
    getDrawResult(): LotteryLotteryDrawResultDistribution | null;
    setDrawResult(drawResult: LotteryLotteryDrawResultDistribution | null): this;
    withDrawResult(drawResult: LotteryLotteryDrawResultDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLotteryDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
