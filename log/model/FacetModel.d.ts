import IModel from '../../core/interface/IModel';
export default class FacetModel implements IModel {
    private facetModelId;
    private field;
    private type;
    private displayName;
    private order;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getField(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, field: string | null): string | null;
    getFacetModelId(): string | null;
    setFacetModelId(facetModelId: string | null): this;
    withFacetModelId(facetModelId: string | null): this;
    getField(): string | null;
    setField(field: string | null): this;
    withField(field: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getOrder(): number | null;
    setOrder(order: number | null): this;
    withOrder(order: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FacetModel | null;
    toDict(): {
        [key: string]: any;
    };
}
