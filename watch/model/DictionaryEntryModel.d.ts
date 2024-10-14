import IModel from '../../core/interface/IModel';
export default class DictionaryEntryModel implements IModel {
    private entryModelModelId;
    private entryName;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getEntryModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, entryModelName: string | null): string | null;
    getEntryModelModelId(): string | null;
    setEntryModelModelId(entryModelModelId: string | null): this;
    withEntryModelModelId(entryModelModelId: string | null): this;
    getEntryName(): string | null;
    setEntryName(entryName: string | null): this;
    withEntryName(entryName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryEntryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
