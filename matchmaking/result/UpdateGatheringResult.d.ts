import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class UpdateGatheringResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.Gathering | null;
    setItem(item: Gs2Matchmaking.Gathering | null): this;
    withItem(item: Gs2Matchmaking.Gathering | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateGatheringResult;
    toDict(): {
        [key: string]: any;
    };
}
