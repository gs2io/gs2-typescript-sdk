import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class IncreaseCounterByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Mission.Counter | null;
    setItem(item: Gs2Mission.Counter | null): this;
    withItem(item: Gs2Mission.Counter | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IncreaseCounterByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}