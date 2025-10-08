import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribeMoldModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Formation.MoldModelMaster[] | null;
    setItems(items: Gs2Formation.MoldModelMaster[] | null): this;
    withItems(items: Gs2Formation.MoldModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMoldModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
