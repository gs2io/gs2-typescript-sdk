import IModel from '../../core/interface/IModel';
export default class CurrentItemModelMaster implements IModel {
    private namespaceId;
    private settings;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null): string | null;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getSettings(): string | null;
    setSettings(settings: string | null): this;
    withSettings(settings: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CurrentItemModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
