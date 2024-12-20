import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ShowcaseShowcase implements IModel {
    private showcaseId;
    private showcaseName;
    private statistics;
    private distributions;
    private displayItems;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getShowcaseName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, showcaseName: string | null): string | null;
    getShowcaseId(): string | null;
    setShowcaseId(showcaseId: string | null): this;
    withShowcaseId(showcaseId: string | null): this;
    getShowcaseName(): string | null;
    setShowcaseName(showcaseName: string | null): this;
    withShowcaseName(showcaseName: string | null): this;
    getStatistics(): Gs2Watch.ShowcaseShowcaseStatistics | null;
    setStatistics(statistics: Gs2Watch.ShowcaseShowcaseStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ShowcaseShowcaseStatistics | null): this;
    getDistributions(): Gs2Watch.ShowcaseShowcaseDistributions | null;
    setDistributions(distributions: Gs2Watch.ShowcaseShowcaseDistributions | null): this;
    withDistributions(distributions: Gs2Watch.ShowcaseShowcaseDistributions | null): this;
    getDisplayItems(): Gs2Watch.ShowcaseDisplayItem[] | null;
    setDisplayItems(displayItems: Gs2Watch.ShowcaseDisplayItem[] | null): this;
    withDisplayItems(displayItems: Gs2Watch.ShowcaseDisplayItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcase | null;
    toDict(): {
        [key: string]: any;
    };
}
