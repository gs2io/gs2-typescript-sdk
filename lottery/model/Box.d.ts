import IModel from '../../core/interface/IModel';
export default class Box implements IModel {
    private boxId;
    private prizeTableName;
    private index;
    private userId;
    private drawnIndexes;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getPrizeTableName(grn: string): string | null;
    static getIndex(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, prizeTableName: string | null, index: string | null): string | null;
    getBoxId(): string | null;
    setBoxId(boxId: string | null): this;
    withBoxId(boxId: string | null): this;
    getPrizeTableName(): string | null;
    setPrizeTableName(prizeTableName: string | null): this;
    withPrizeTableName(prizeTableName: string | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDrawnIndexes(): number[] | null;
    setDrawnIndexes(drawnIndexes: number[] | null): this;
    withDrawnIndexes(drawnIndexes: number[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Box | null;
    toDict(): {
        [key: string]: any;
    };
}
