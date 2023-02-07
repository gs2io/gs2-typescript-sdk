import IModel from '../../core/interface/IModel';
import BoxItem from './BoxItem';
export default class BoxItems implements IModel {
    private boxId;
    private prizeTableName;
    private userId;
    private items;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getPrizeTableName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, prizeTableName: string | null): string | null;
    getBoxId(): string | null;
    setBoxId(boxId: string | null): this;
    withBoxId(boxId: string | null): this;
    getPrizeTableName(): string | null;
    setPrizeTableName(prizeTableName: string | null): this;
    withPrizeTableName(prizeTableName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getItems(): BoxItem[] | null;
    setItems(items: BoxItem[] | null): this;
    withItems(items: BoxItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BoxItems | null;
    toDict(): {
        [key: string]: any;
    };
}
