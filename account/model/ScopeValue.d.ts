import IModel from '../../core/interface/IModel';
export default class ScopeValue implements IModel {
    private key;
    private value;
    getKey(): string | null;
    setKey(key: string | null): this;
    withKey(key: string | null): this;
    getValue(): string | null;
    setValue(value: string | null): this;
    withValue(value: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ScopeValue | null;
    toDict(): {
        [key: string]: any;
    };
}
