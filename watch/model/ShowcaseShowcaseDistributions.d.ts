import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseShowcaseDistributions implements IModel {
    private buy;
    getBuy(): Gs2Watch.ShowcaseShowcaseBuyDistribution | null;
    setBuy(buy: Gs2Watch.ShowcaseShowcaseBuyDistribution | null): this;
    withBuy(buy: Gs2Watch.ShowcaseShowcaseBuyDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcaseDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
