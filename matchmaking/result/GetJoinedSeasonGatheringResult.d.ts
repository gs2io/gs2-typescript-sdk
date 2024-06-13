import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetJoinedSeasonGatheringResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.JoinedSeasonGathering | null;
    setItem(item: Gs2Matchmaking.JoinedSeasonGathering | null): this;
    withItem(item: Gs2Matchmaking.JoinedSeasonGathering | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJoinedSeasonGatheringResult;
    toDict(): {
        [key: string]: any;
    };
}
