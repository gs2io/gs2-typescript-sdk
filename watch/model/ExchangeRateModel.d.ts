import IModel from '../../core/interface/IModel';
import ExchangeRateModelStatistics from './ExchangeRateModelStatistics';
import ExchangeRateModelDistributions from './ExchangeRateModelDistributions';
export default class ExchangeRateModel implements IModel {
    private rateModelId;
    private rateName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getRateName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, rateName: string | null): string | null;
    getRateModelId(): string | null;
    setRateModelId(rateModelId: string | null): this;
    withRateModelId(rateModelId: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getStatistics(): ExchangeRateModelStatistics | null;
    setStatistics(statistics: ExchangeRateModelStatistics | null): this;
    withStatistics(statistics: ExchangeRateModelStatistics | null): this;
    getDistributions(): ExchangeRateModelDistributions | null;
    setDistributions(distributions: ExchangeRateModelDistributions | null): this;
    withDistributions(distributions: ExchangeRateModelDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeRateModel | null;
    toDict(): {
        [key: string]: any;
    };
}
