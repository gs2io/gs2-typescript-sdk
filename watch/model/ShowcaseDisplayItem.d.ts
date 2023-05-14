import IModel from '../../core/interface/IModel';
import ShowcaseBuyQuantityDistribution from './ShowcaseBuyQuantityDistribution';
export default class ShowcaseDisplayItem implements IModel {
    private displayItemId;
    private quantityDistribution;
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getQuantityDistribution(): ShowcaseBuyQuantityDistribution[] | null;
    setQuantityDistribution(quantityDistribution: ShowcaseBuyQuantityDistribution[] | null): this;
    withQuantityDistribution(quantityDistribution: ShowcaseBuyQuantityDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItem | null;
    toDict(): {
        [key: string]: any;
    };
}
