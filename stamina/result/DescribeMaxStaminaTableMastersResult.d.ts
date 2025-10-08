import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class DescribeMaxStaminaTableMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Stamina.MaxStaminaTableMaster[] | null;
    setItems(items: Gs2Stamina.MaxStaminaTableMaster[] | null): this;
    withItems(items: Gs2Stamina.MaxStaminaTableMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMaxStaminaTableMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
