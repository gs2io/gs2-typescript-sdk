import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class GetRatingResult implements IResult {
    private item;
    getItem(): Gs2Matchmaking.Rating | null;
    setItem(item: Gs2Matchmaking.Rating | null): this;
    withItem(item: Gs2Matchmaking.Rating | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRatingResult;
    toDict(): {
        [key: string]: any;
    };
}
