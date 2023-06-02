import IModel from '../../core/interface/IModel';
export default class KeyNamespaceEncryptDistributionSegment implements IModel {
    private keyName;
    private count;
    getKeyName(): string | null;
    setKeyName(keyName: string | null): this;
    withKeyName(keyName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceEncryptDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
