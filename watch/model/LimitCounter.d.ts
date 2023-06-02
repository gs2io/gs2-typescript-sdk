import IModel from '../../core/interface/IModel';
import LimitCounterStatistics from './LimitCounterStatistics';
import LimitCounterDistributions from './LimitCounterDistributions';
export default class LimitCounter implements IModel {
    private counterId;
    private limitName;
    private counterName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getLimitName(grn: string): string | null;
    static getCounterName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, limitName: string | null, counterName: string | null): string | null;
    getCounterId(): string | null;
    setCounterId(counterId: string | null): this;
    withCounterId(counterId: string | null): this;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getStatistics(): LimitCounterStatistics | null;
    setStatistics(statistics: LimitCounterStatistics | null): this;
    withStatistics(statistics: LimitCounterStatistics | null): this;
    getDistributions(): LimitCounterDistributions | null;
    setDistributions(distributions: LimitCounterDistributions | null): this;
    withDistributions(distributions: LimitCounterDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounter | null;
    toDict(): {
        [key: string]: any;
    };
}
