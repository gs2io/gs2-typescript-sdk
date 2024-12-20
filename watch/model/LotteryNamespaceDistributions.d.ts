import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryNamespaceDistributions implements IModel {
    private draw;
    private drawAmount;
    private drawByUser;
    private drawAmountByUser;
    getDraw(): Gs2Watch.LotteryNamespaceDrawDistribution | null;
    setDraw(draw: Gs2Watch.LotteryNamespaceDrawDistribution | null): this;
    withDraw(draw: Gs2Watch.LotteryNamespaceDrawDistribution | null): this;
    getDrawAmount(): Gs2Watch.LotteryNamespaceDrawAmountDistribution | null;
    setDrawAmount(drawAmount: Gs2Watch.LotteryNamespaceDrawAmountDistribution | null): this;
    withDrawAmount(drawAmount: Gs2Watch.LotteryNamespaceDrawAmountDistribution | null): this;
    getDrawByUser(): Gs2Watch.LotteryNamespaceDrawByUserDistribution | null;
    setDrawByUser(drawByUser: Gs2Watch.LotteryNamespaceDrawByUserDistribution | null): this;
    withDrawByUser(drawByUser: Gs2Watch.LotteryNamespaceDrawByUserDistribution | null): this;
    getDrawAmountByUser(): Gs2Watch.LotteryNamespaceDrawAmountByUserDistribution | null;
    setDrawAmountByUser(drawAmountByUser: Gs2Watch.LotteryNamespaceDrawAmountByUserDistribution | null): this;
    withDrawAmountByUser(drawAmountByUser: Gs2Watch.LotteryNamespaceDrawAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
