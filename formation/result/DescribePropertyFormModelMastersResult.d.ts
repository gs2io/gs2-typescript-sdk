import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribePropertyFormModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Formation.PropertyFormModelMaster[] | null;
    setItems(items: Gs2Formation.PropertyFormModelMaster[] | null): this;
    withItems(items: Gs2Formation.PropertyFormModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePropertyFormModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
