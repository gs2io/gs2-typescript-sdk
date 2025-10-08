import IModel from '../../core/interface/IModel';
export default class LotteryNamespaceStatistics implements IModel {
    private draw;
    private drawAmount;
    getDraw(): number | null;
    setDraw(draw: number | null): this;
    withDraw(draw: number | null): this;
    getDrawAmount(): number | null;
    setDrawAmount(drawAmount: number | null): this;
    withDrawAmount(drawAmount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
