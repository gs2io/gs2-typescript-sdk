import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class DeleteGatheringResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.Gathering | null;
    setItem(item: Gs2Matchmaking.Gathering | null): this;
    withItem(item: Gs2Matchmaking.Gathering | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteGatheringResult;
    toDict(): {
        [key: string]: any;
    };
}
