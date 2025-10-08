import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseDisplayItem implements IModel {
    private displayItemId;
    private statistics;
    private distributions;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getStatistics(): Gs2Watch.ShowcaseDisplayItemStatistics | null;
    setStatistics(statistics: Gs2Watch.ShowcaseDisplayItemStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ShowcaseDisplayItemStatistics | null): this;
    getDistributions(): Gs2Watch.ShowcaseDisplayItemDistributions | null;
    setDistributions(distributions: Gs2Watch.ShowcaseDisplayItemDistributions | null): this;
    withDistributions(distributions: Gs2Watch.ShowcaseDisplayItemDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseDisplayItem | null;
    toDict(): {
        [key: string]: any;
    };
}
