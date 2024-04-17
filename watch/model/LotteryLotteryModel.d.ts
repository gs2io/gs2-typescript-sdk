import IModel from '../../core/interface/IModel';
export default class LotteryLotteryModel implements IModel {
    private lotteryModelId;
    private lotteryName;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getLotteryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, lotteryName: string | null): string | null;
    getLotteryModelId(): string | null;
    setLotteryModelId(lotteryModelId: string | null): this;
    withLotteryModelId(lotteryModelId: string | null): this;
    getLotteryName(): string | null;
    setLotteryName(lotteryName: string | null): this;
    withLotteryName(lotteryName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLotteryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
