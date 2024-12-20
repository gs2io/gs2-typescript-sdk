import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseDisplayItemDistributions implements IModel {
    private quantity;
    getQuantity(): Gs2Watch.ShowcaseDisplayItemQuantityDistribution | null;
    setQuantity(quantity: Gs2Watch.ShowcaseDisplayItemQuantityDistribution | null): this;
    withQuantity(quantity: Gs2Watch.ShowcaseDisplayItemQuantityDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItemDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
