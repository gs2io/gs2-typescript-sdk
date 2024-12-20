import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryLottery implements IModel {
    private lotteryId;
    private lotteryName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getLotteryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, lotteryName: string | null): string | null;
    getLotteryId(): string | null;
    setLotteryId(lotteryId: string | null): this;
    withLotteryId(lotteryId: string | null): this;
    getLotteryName(): string | null;
    setLotteryName(lotteryName: string | null): this;
    withLotteryName(lotteryName: string | null): this;
    getStatistics(): Gs2Watch.LotteryLotteryStatistics | null;
    setStatistics(statistics: Gs2Watch.LotteryLotteryStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LotteryLotteryStatistics | null): this;
    getDistributions(): Gs2Watch.LotteryLotteryDistributions | null;
    setDistributions(distributions: Gs2Watch.LotteryLotteryDistributions | null): this;
    withDistributions(distributions: Gs2Watch.LotteryLotteryDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLottery | null;
    toDict(): {
        [key: string]: any;
    };
}
