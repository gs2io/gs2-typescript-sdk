import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetSeasonModelResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.SeasonModel | null;
    setItem(item: Gs2Matchmaking.SeasonModel | null): this;
    withItem(item: Gs2Matchmaking.SeasonModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSeasonModelResult;
    toDict(): {
        [key: string]: any;
    };
}
