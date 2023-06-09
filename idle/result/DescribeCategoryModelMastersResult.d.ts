import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class DescribeCategoryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Idle.CategoryModelMaster[] | null;
    setItems(items: Gs2Idle.CategoryModelMaster[] | null): this;
    withItems(items: Gs2Idle.CategoryModelMaster[] | null): this;
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
