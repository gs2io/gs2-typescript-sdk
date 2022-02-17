import IModel from '../../core/interface/IModel';
export default class LotteryModel implements IModel {
    private lotteryModelId;
    private name;
    private metadata;
    private mode;
    private method;
    private prizeTableName;
    private choicePrizeTableScriptId;
    getLotteryModelId(): string | null;
    setLotteryModelId(lotteryModelId: string | null): this;
    withLotteryModelId(lotteryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getMode(): string | null;
    setMode(mode: string | null): this;
    withMode(mode: string | null): this;
    getMethod(): string | null;
    setMethod(method: string | null): this;
    withMethod(method: string | null): this;
    getPrizeTableName(): string | null;
    setPrizeTableName(prizeTableName: string | null): this;
    withPrizeTableName(prizeTableName: string | null): this;
    getChoicePrizeTableScriptId(): string | null;
    setChoicePrizeTableScriptId(choicePrizeTableScriptId: string | null): this;
    withChoicePrizeTableScriptId(choicePrizeTableScriptId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
