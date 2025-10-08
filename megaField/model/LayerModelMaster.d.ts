import IModel from '../../core/interface/IModel';
export default class LayerModelMaster implements IModel {
    private layerModelMasterId;
    private name;
    private description;
    private metadata;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getAreaModelName(grn: string): string | null;
    static getLayerModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, areaModelName: string | null, layerModelName: string | null): string | null;
    getLayerModelMasterId(): string | null;
    setLayerModelMasterId(layerModelMasterId: string | null): this;
    withLayerModelMasterId(layerModelMasterId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LayerModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
