import IModel from '../../core/interface/IModel';
import BoxItem from './BoxItem';
export default class BoxItems implements IModel {
    private boxId;
    private prizeTableName;
    private userId;
    private items;
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
