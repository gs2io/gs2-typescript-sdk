import IModel from '../../core/interface/IModel';
export default class AreaModel implements IModel {
    private areaModelId;
    private name;
    private metadata;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getAreaModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, areaModelName: string | null): string | null;
    getAreaModelId(): string | null;
    setAreaModelId(areaModelId: string | null): this;
    withAreaModelId(areaModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AreaModel | null;
    toDict(): {
        [key: string]: any;
    };
}
