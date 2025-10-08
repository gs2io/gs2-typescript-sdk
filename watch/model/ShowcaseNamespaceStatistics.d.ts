import IModel from '../../core/interface/IModel';
export default class ShowcaseNamespaceStatistics implements IModel {
    private buy;
    getBuy(): number | null;
    setBuy(buy: number | null): this;
    withBuy(buy: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
