import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class DescribeAreaModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2MegaField.AreaModelMaster[] | null;
    setItems(items: Gs2MegaField.AreaModelMaster[] | null): this;
    withItems(items: Gs2MegaField.AreaModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeAreaModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
