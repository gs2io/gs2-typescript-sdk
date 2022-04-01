import IModel from '../../core/interface/IModel';
export default class Cumulative implements IModel {
    private cumulativeId;
    private resourceGrn;
    private name;
    private value;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getResourceGrn(grn: string): string | null;
    static getName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, resourceGrn: string | null, name: string | null): string | null;
    getCumulativeId(): string | null;
    setCumulativeId(cumulativeId: string | null): this;
    withCumulativeId(cumulativeId: string | null): this;
    getResourceGrn(): string | null;
    setResourceGrn(resourceGrn: string | null): this;
    withResourceGrn(resourceGrn: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Cumulative | null;
    toDict(): {
        [key: string]: any;
    };
}
