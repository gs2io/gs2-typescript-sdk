import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class RankingCategoryModel implements IModel {
    private categoryModelId;
    private categoryName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCategoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, categoryName: string | null): string | null;
    getCategoryModelId(): string | null;
    setCategoryModelId(categoryModelId: string | null): this;
    withCategoryModelId(categoryModelId: string | null): this;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getStatistics(): Gs2Watch.RankingCategoryModelStatistics | null;
    setStatistics(statistics: Gs2Watch.RankingCategoryModelStatistics | null): this;
    withStatistics(statistics: Gs2Watch.RankingCategoryModelStatistics | null): this;
    getDistributions(): Gs2Watch.RankingCategoryModelDistributions | null;
    setDistributions(distributions: Gs2Watch.RankingCategoryModelDistributions | null): this;
    withDistributions(distributions: Gs2Watch.RankingCategoryModelDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingCategoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
