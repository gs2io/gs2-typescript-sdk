import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DescribeSeasonModelsResult implements IResult {
    private items;
    getItems(): Gs2Matchmaking.SeasonModel[] | null;
    setItems(items: Gs2Matchmaking.SeasonModel[] | null): this;
    withItems(items: Gs2Matchmaking.SeasonModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSeasonModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
