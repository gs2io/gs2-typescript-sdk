import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseNamespaceDistributions implements IModel {
    private buy;
    getBuy(): Gs2Watch.ShowcaseNamespaceBuyDistribution | null;
    setBuy(buy: Gs2Watch.ShowcaseNamespaceBuyDistribution | null): this;
    withBuy(buy: Gs2Watch.ShowcaseNamespaceBuyDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
