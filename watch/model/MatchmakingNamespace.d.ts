import IModel from '../../core/interface/IModel';
import MatchmakingNamespaceStatistics from './MatchmakingNamespaceStatistics';
import MatchmakingNamespaceDistributions from './MatchmakingNamespaceDistributions';
export default class MatchmakingNamespace implements IModel {
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
    getStatistics(): MatchmakingNamespaceStatistics | null;
    setStatistics(statistics: MatchmakingNamespaceStatistics | null): this;
    withStatistics(statistics: MatchmakingNamespaceStatistics | null): this;
    getDistributions(): MatchmakingNamespaceDistributions | null;
    setDistributions(distributions: MatchmakingNamespaceDistributions | null): this;
    withDistributions(distributions: MatchmakingNamespaceDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
