import IModel from '../../core/interface/IModel';
export default class ChatNamespacePostByCategoryDistributionSegment implements IModel {
    private category;
    private count;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByCategoryDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
