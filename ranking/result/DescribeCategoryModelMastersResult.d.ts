import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class DescribeCategoryModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Ranking.CategoryModelMaster[] | null;
    setItems(items: Gs2Ranking.CategoryModelMaster[] | null): this;
    withItems(items: Gs2Ranking.CategoryModelMaster[] | null): this;
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
