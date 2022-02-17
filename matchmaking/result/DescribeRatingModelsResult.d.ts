import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeRatingModelsResult implements IResult {
    private items;
    getItems(): Gs2Matchmaking.RatingModel[] | null;
    setItems(items: Gs2Matchmaking.RatingModel[] | null): this;
    withItems(items: Gs2Matchmaking.RatingModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRatingModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
