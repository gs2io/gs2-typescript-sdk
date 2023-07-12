import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class DescribeBonusModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2LoginReward.BonusModelMaster[] | null;
    setItems(items: Gs2LoginReward.BonusModelMaster[] | null): this;
    withItems(items: Gs2LoginReward.BonusModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBonusModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
