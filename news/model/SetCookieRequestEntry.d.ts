import IModel from '../../core/interface/IModel';
export default class SetCookieRequestEntry implements IModel {
    private key;
    private value;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getKey(): string | null;
    setKey(key: string | null): this;
    withKey(key: string | null): this;
    getValue(): string | null;
    setValue(value: string | null): this;
    withValue(value: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetCookieRequestEntry | null;
    toDict(): {
        [key: string]: any;
    };
}
