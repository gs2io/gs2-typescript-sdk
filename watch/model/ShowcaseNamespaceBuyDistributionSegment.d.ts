import IModel from '../../core/interface/IModel';
export default class ShowcaseNamespaceBuyDistributionSegment implements IModel {
    private showcaseName;
    private count;
    getShowcaseName(): string | null;
    setShowcaseName(showcaseName: string | null): this;
    withShowcaseName(showcaseName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespaceBuyDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
