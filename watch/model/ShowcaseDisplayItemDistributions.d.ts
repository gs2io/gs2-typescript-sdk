import IModel from '../../core/interface/IModel';
import ShowcaseDisplayItemQuantityDistribution from './ShowcaseDisplayItemQuantityDistribution';
export default class ShowcaseDisplayItemDistributions implements IModel {
    private quantity;
    getQuantity(): ShowcaseDisplayItemQuantityDistribution | null;
    setQuantity(quantity: ShowcaseDisplayItemQuantityDistribution | null): this;
    withQuantity(quantity: ShowcaseDisplayItemQuantityDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItemDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
