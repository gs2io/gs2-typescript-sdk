import IModel from '../../core/interface/IModel';
export default class ShowcaseShowcaseStatistics implements IModel {
    private buy;
    getBuy(): number | null;
    setBuy(buy: number | null): this;
    withBuy(buy: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcaseStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
