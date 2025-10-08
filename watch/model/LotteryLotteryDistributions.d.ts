import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryLotteryDistributions implements IModel {
    private drawResult;
    getDrawResult(): Gs2Watch.LotteryLotteryDrawResultDistribution | null;
    setDrawResult(drawResult: Gs2Watch.LotteryLotteryDrawResultDistribution | null): this;
    withDrawResult(drawResult: Gs2Watch.LotteryLotteryDrawResultDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLotteryDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
