import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribeMoldsResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Formation.Mold[] | null;
    setItems(items: Gs2Formation.Mold[] | null): this;
    withItems(items: Gs2Formation.Mold[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMoldsResult;
    toDict(): {
        [key: string]: any;
    };
}
