import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class ResetCounterResult implements IResult {
    private item;
    getItem(): Gs2Mission.Counter | null;
    setItem(item: Gs2Mission.Counter | null): this;
    withItem(item: Gs2Mission.Counter | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ResetCounterResult;
    toDict(): {
        [key: string]: any;
    };
}
