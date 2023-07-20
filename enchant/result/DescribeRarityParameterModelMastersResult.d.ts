import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class DescribeRarityParameterModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Enchant.RarityParameterModelMaster[] | null;
    setItems(items: Gs2Enchant.RarityParameterModelMaster[] | null): this;
    withItems(items: Gs2Enchant.RarityParameterModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRarityParameterModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
