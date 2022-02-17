import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribeFormModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Formation.FormModelMaster[] | null;
    setItems(items: Gs2Formation.FormModelMaster[] | null): this;
    withItems(items: Gs2Formation.FormModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFormModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
