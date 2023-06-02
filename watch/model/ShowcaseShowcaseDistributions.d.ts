import IModel from '../../core/interface/IModel';
import ShowcaseShowcaseBuyDistribution from './ShowcaseShowcaseBuyDistribution';
export default class ShowcaseShowcaseDistributions implements IModel {
    private buy;
    getBuy(): ShowcaseShowcaseBuyDistribution | null;
    setBuy(buy: ShowcaseShowcaseBuyDistribution | null): this;
    withBuy(buy: ShowcaseShowcaseBuyDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcaseDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
