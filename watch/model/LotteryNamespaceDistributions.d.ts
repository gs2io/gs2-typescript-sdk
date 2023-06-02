import IModel from '../../core/interface/IModel';
import LotteryNamespaceDrawDistribution from './LotteryNamespaceDrawDistribution';
import LotteryNamespaceDrawAmountDistribution from './LotteryNamespaceDrawAmountDistribution';
import LotteryNamespaceDrawByUserDistribution from './LotteryNamespaceDrawByUserDistribution';
import LotteryNamespaceDrawAmountByUserDistribution from './LotteryNamespaceDrawAmountByUserDistribution';
export default class LotteryNamespaceDistributions implements IModel {
    private draw;
    private drawAmount;
    private drawByUser;
    private drawAmountByUser;
    getDraw(): LotteryNamespaceDrawDistribution | null;
    setDraw(draw: LotteryNamespaceDrawDistribution | null): this;
    withDraw(draw: LotteryNamespaceDrawDistribution | null): this;
    getDrawAmount(): LotteryNamespaceDrawAmountDistribution | null;
    setDrawAmount(drawAmount: LotteryNamespaceDrawAmountDistribution | null): this;
    withDrawAmount(drawAmount: LotteryNamespaceDrawAmountDistribution | null): this;
    getDrawByUser(): LotteryNamespaceDrawByUserDistribution | null;
    setDrawByUser(drawByUser: LotteryNamespaceDrawByUserDistribution | null): this;
    withDrawByUser(drawByUser: LotteryNamespaceDrawByUserDistribution | null): this;
    getDrawAmountByUser(): LotteryNamespaceDrawAmountByUserDistribution | null;
    setDrawAmountByUser(drawAmountByUser: LotteryNamespaceDrawAmountByUserDistribution | null): this;
    withDrawAmountByUser(drawAmountByUser: LotteryNamespaceDrawAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
