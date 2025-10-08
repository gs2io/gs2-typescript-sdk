import IModel from '../../core/interface/IModel';
export default class ShowcaseShowcaseBuyDistributionSegment implements IModel {
    private displayItemId;
    private count;
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcaseBuyDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
