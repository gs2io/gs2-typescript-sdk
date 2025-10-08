import IModel from '../../core/interface/IModel';
export default class Layer implements IModel {
    private layerId;
    private areaModelName;
    private layerModelName;
    private numberOfMinEntries;
    private numberOfMaxEntries;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getAreaModelName(grn: string): string | null;
    static getLayerModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, areaModelName: string | null, layerModelName: string | null): string | null;
    getLayerId(): string | null;
    setLayerId(layerId: string | null): this;
    withLayerId(layerId: string | null): this;
    getAreaModelName(): string | null;
    setAreaModelName(areaModelName: string | null): this;
    withAreaModelName(areaModelName: string | null): this;
    getLayerModelName(): string | null;
    setLayerModelName(layerModelName: string | null): this;
    withLayerModelName(layerModelName: string | null): this;
    getNumberOfMinEntries(): number | null;
    setNumberOfMinEntries(numberOfMinEntries: number | null): this;
    withNumberOfMinEntries(numberOfMinEntries: number | null): this;
    getNumberOfMaxEntries(): number | null;
    setNumberOfMaxEntries(numberOfMaxEntries: number | null): this;
    withNumberOfMaxEntries(numberOfMaxEntries: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Layer | null;
    toDict(): {
        [key: string]: any;
    };
}
