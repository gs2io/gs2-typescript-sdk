import IModel from '../../core/interface/IModel';
export default class PrizeLimit implements IModel {
    private prizeLimitId;
    private prizeId;
    private drawnCount;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getPrizeTableName(grn: string): string | null;
    static getPrizeId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, prizeTableName: string | null, prizeId: string | null): string | null;
    getPrizeLimitId(): string | null;
    setPrizeLimitId(prizeLimitId: string | null): this;
    withPrizeLimitId(prizeLimitId: string | null): this;
    getPrizeId(): string | null;
    setPrizeId(prizeId: string | null): this;
    withPrizeId(prizeId: string | null): this;
    getDrawnCount(): number | null;
    setDrawnCount(drawnCount: number | null): this;
    withDrawnCount(drawnCount: number | null): this;
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
    }): PrizeLimit | null;
    toDict(): {
        [key: string]: any;
    };
}
