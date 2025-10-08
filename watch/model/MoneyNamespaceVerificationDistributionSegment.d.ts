import IModel from '../../core/interface/IModel';
export default class MoneyNamespaceVerificationDistributionSegment implements IModel {
    private contentsId;
    private count;
    getContentsId(): string | null;
    setContentsId(contentsId: string | null): this;
    withContentsId(contentsId: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceVerificationDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
