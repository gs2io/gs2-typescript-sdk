import IModel from '../../core/interface/IModel';
import ExchangeNamespaceStatistics from './ExchangeNamespaceStatistics';
import ExchangeNamespaceDistributions from './ExchangeNamespaceDistributions';
import ExchangeRateModel from './ExchangeRateModel';
export default class ExchangeNamespace implements IModel {
    private namespaceId;
    private year;
    private month;
    private day;
    private namespaceName;
    private statistics;
    private distributions;
    private rateModels;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null): string | null;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getDay(): number | null;
    setDay(day: number | null): this;
    withDay(day: number | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStatistics(): ExchangeNamespaceStatistics | null;
    setStatistics(statistics: ExchangeNamespaceStatistics | null): this;
    withStatistics(statistics: ExchangeNamespaceStatistics | null): this;
    getDistributions(): ExchangeNamespaceDistributions | null;
    setDistributions(distributions: ExchangeNamespaceDistributions | null): this;
    withDistributions(distributions: ExchangeNamespaceDistributions | null): this;
    getRateModels(): ExchangeRateModel[] | null;
    setRateModels(rateModels: ExchangeRateModel[] | null): this;
    withRateModels(rateModels: ExchangeRateModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
