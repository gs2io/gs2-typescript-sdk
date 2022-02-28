import IModel from '../../core/interface/IModel';
import Prize from './Prize';
export default class PrizeTableMaster implements IModel {
    private prizeTableId;
    private name;
    private metadata;
    private description;
    private prizes;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getPrizeTableName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, prizeTableName: string | null): string | null;
    getPrizeTableId(): string | null;
    setPrizeTableId(prizeTableId: string | null): this;
    withPrizeTableId(prizeTableId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPrizes(): Prize[] | null;
    setPrizes(prizes: Prize[] | null): this;
    withPrizes(prizes: Prize[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrizeTableMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
