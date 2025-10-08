import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class DescribeCampaignModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2SerialKey.CampaignModelMaster[] | null;
    setItems(items: Gs2SerialKey.CampaignModelMaster[] | null): this;
    withItems(items: Gs2SerialKey.CampaignModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCampaignModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
