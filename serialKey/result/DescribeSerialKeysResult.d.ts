import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class DescribeSerialKeysResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2SerialKey.SerialKey[] | null;
    setItems(items: Gs2SerialKey.SerialKey[] | null): this;
    withItems(items: Gs2SerialKey.SerialKey[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSerialKeysResult;
    toDict(): {
        [key: string]: any;
    };
}
