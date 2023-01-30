import IModel from '../../core/interface/IModel';
export default class LayerModel implements IModel {
    private layerModelId;
    private name;
    private metadata;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getAreaModelName(grn: string): string | null;
    static getLayerModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, areaModelName: string | null, layerModelName: string | null): string | null;
    getLayerModelId(): string | null;
    setLayerModelId(layerModelId: string | null): this;
    withLayerModelId(layerModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LayerModel | null;
    toDict(): {
        [key: string]: any;
    };
}
