import IResult from '../../core/interface/IResult';
import * as Gs2Chat from '../model';
export default class DescribeCategoryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Chat.CategoryModelMaster[] | null;
    setItems(items: Gs2Chat.CategoryModelMaster[] | null): this;
    withItems(items: Gs2Chat.CategoryModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCategoryModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
