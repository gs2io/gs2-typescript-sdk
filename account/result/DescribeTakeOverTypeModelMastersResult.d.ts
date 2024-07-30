import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class DescribeTakeOverTypeModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Account.TakeOverTypeModelMaster[] | null;
    setItems(items: Gs2Account.TakeOverTypeModelMaster[] | null): this;
    withItems(items: Gs2Account.TakeOverTypeModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeTakeOverTypeModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
