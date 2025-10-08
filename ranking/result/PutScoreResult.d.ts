import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class PutScoreResult implements IResult {
    private item;
    getItem(): Gs2Ranking.Score | null;
    setItem(item: Gs2Ranking.Score | null): this;
    withItem(item: Gs2Ranking.Score | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutScoreResult;
    toDict(): {
        [key: string]: any;
    };
}
