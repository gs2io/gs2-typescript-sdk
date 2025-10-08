import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class DescribeNearRankingsResult implements IResult {
    private items;
    getItems(): Gs2Ranking.Ranking[] | null;
    setItems(items: Gs2Ranking.Ranking[] | null): this;
    withItems(items: Gs2Ranking.Ranking[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNearRankingsResult;
    toDict(): {
        [key: string]: any;
    };
}
