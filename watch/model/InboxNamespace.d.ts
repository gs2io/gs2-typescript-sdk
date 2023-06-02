import IModel from '../../core/interface/IModel';
import InboxNamespaceStatistics from './InboxNamespaceStatistics';
import InboxNamespaceDistributions from './InboxNamespaceDistributions';
export default class InboxNamespace implements IModel {
    private namespaceId;
    private year;
    private month;
    private day;
    private namespaceName;
    private statistics;
    private distributions;
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
    getStatistics(): InboxNamespaceStatistics | null;
    setStatistics(statistics: InboxNamespaceStatistics | null): this;
    withStatistics(statistics: InboxNamespaceStatistics | null): this;
    getDistributions(): InboxNamespaceDistributions | null;
    setDistributions(distributions: InboxNamespaceDistributions | null): this;
    withDistributions(distributions: InboxNamespaceDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
