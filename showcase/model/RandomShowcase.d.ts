import IModel from '../../core/interface/IModel';
import RandomDisplayItemModel from './RandomDisplayItemModel';
export default class RandomShowcase implements IModel {
    private randomShowcaseId;
    private name;
    private metadata;
    private maximumNumberOfChoice;
    private displayItems;
    private baseTimestamp;
    private resetIntervalHours;
    private salesPeriodEventId;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getShowcaseName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, showcaseName: string | null): string | null;
    getRandomShowcaseId(): string | null;
    setRandomShowcaseId(randomShowcaseId: string | null): this;
    withRandomShowcaseId(randomShowcaseId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getMaximumNumberOfChoice(): number | null;
    setMaximumNumberOfChoice(maximumNumberOfChoice: number | null): this;
    withMaximumNumberOfChoice(maximumNumberOfChoice: number | null): this;
    getDisplayItems(): RandomDisplayItemModel[] | null;
    setDisplayItems(displayItems: RandomDisplayItemModel[] | null): this;
    withDisplayItems(displayItems: RandomDisplayItemModel[] | null): this;
    getBaseTimestamp(): number | null;
    setBaseTimestamp(baseTimestamp: number | null): this;
    withBaseTimestamp(baseTimestamp: number | null): this;
    getResetIntervalHours(): number | null;
    setResetIntervalHours(resetIntervalHours: number | null): this;
    withResetIntervalHours(resetIntervalHours: number | null): this;
    getSalesPeriodEventId(): string | null;
    setSalesPeriodEventId(salesPeriodEventId: string | null): this;
    withSalesPeriodEventId(salesPeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomShowcase | null;
    toDict(): {
        [key: string]: any;
    };
}
