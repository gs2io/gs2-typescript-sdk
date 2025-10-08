import IModel from '../../core/interface/IModel';
export default class ReferenceOf implements IModel {
    private referenceOfId;
    private name;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getInventoryName(grn: string): string | null;
    static getItemName(grn: string): string | null;
    static getItemSetName(grn: string): string | null;
    static getReferenceOf(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, inventoryName: string | null, itemName: string | null, itemSetName: string | null, referenceOf: string | null): string | null;
    getReferenceOfId(): string | null;
    setReferenceOfId(referenceOfId: string | null): this;
    withReferenceOfId(referenceOfId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReferenceOf | null;
    toDict(): {
        [key: string]: any;
    };
}
