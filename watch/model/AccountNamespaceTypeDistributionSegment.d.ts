import IModel from '../../core/interface/IModel';
export default class AccountNamespaceTypeDistributionSegment implements IModel {
    private type;
    private count;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespaceTypeDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
