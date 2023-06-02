import IModel from '../../core/interface/IModel';
import LimitLimitModelStatistics from './LimitLimitModelStatistics';
import LimitLimitModelDistributions from './LimitLimitModelDistributions';
import LimitCounter from './LimitCounter';
export default class LimitLimitModel implements IModel {
    private limitModelId;
    private limitName;
    private statistics;
    private distributions;
    private counters;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getLimitName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, limitName: string | null): string | null;
    getLimitModelId(): string | null;
    setLimitModelId(limitModelId: string | null): this;
    withLimitModelId(limitModelId: string | null): this;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getStatistics(): LimitLimitModelStatistics | null;
    setStatistics(statistics: LimitLimitModelStatistics | null): this;
    withStatistics(statistics: LimitLimitModelStatistics | null): this;
    getDistributions(): LimitLimitModelDistributions | null;
    setDistributions(distributions: LimitLimitModelDistributions | null): this;
    withDistributions(distributions: LimitLimitModelDistributions | null): this;
    getCounters(): LimitCounter[] | null;
    setCounters(counters: LimitCounter[] | null): this;
    withCounters(counters: LimitCounter[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModel | null;
    toDict(): {
        [key: string]: any;
    };
}
