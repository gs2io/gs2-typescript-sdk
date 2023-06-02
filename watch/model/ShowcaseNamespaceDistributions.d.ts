import IModel from '../../core/interface/IModel';
import ShowcaseNamespaceBuyDistribution from './ShowcaseNamespaceBuyDistribution';
export default class ShowcaseNamespaceDistributions implements IModel {
    private buy;
    getBuy(): ShowcaseNamespaceBuyDistribution | null;
    setBuy(buy: ShowcaseNamespaceBuyDistribution | null): this;
    withBuy(buy: ShowcaseNamespaceBuyDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
