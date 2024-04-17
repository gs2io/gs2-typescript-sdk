import IModel from '../../core/interface/IModel';
export default class KeyKey implements IModel {
    private keyId;
    private keyName;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getKeyName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, keyName: string | null): string | null;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getKeyName(): string | null;
    setKeyName(keyName: string | null): this;
    withKeyName(keyName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyKey | null;
    toDict(): {
        [key: string]: any;
    };
}
