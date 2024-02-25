import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class DescribeSeasonModelsResult implements IResult {
    private items;
    getItems(): Gs2SeasonRating.SeasonModel[] | null;
    setItems(items: Gs2SeasonRating.SeasonModel[] | null): this;
    withItems(items: Gs2SeasonRating.SeasonModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSeasonModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
