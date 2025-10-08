import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class DescribeBonusModelsResult implements IResult {
    private items;
    getItems(): Gs2LoginReward.BonusModel[] | null;
    setItems(items: Gs2LoginReward.BonusModel[] | null): this;
    withItems(items: Gs2LoginReward.BonusModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBonusModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
