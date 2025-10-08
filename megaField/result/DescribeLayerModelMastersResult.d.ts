import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class DescribeLayerModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2MegaField.LayerModelMaster[] | null;
    setItems(items: Gs2MegaField.LayerModelMaster[] | null): this;
    withItems(items: Gs2MegaField.LayerModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLayerModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
