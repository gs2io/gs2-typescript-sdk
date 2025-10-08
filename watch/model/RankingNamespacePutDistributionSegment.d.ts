import IModel from '../../core/interface/IModel';
export default class RankingNamespacePutDistributionSegment implements IModel {
    private categoryName;
    private count;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingNamespacePutDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
