import IModel from '../../core/interface/IModel';
import ShowcaseDisplayItemStatistics from './ShowcaseDisplayItemStatistics';
import ShowcaseDisplayItemDistributions from './ShowcaseDisplayItemDistributions';
export default class ShowcaseDisplayItem implements IModel {
    private displayItemId;
    private statistics;
    private distributions;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getStatistics(): ShowcaseDisplayItemStatistics | null;
    setStatistics(statistics: ShowcaseDisplayItemStatistics | null): this;
    withStatistics(statistics: ShowcaseDisplayItemStatistics | null): this;
    getDistributions(): ShowcaseDisplayItemDistributions | null;
    setDistributions(distributions: ShowcaseDisplayItemDistributions | null): this;
    withDistributions(distributions: ShowcaseDisplayItemDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItem | null;
    toDict(): {
        [key: string]: any;
    };
}
