import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class DeleteCounterByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Limit.Counter | null;
    setItem(item: Gs2Limit.Counter | null): this;
    withItem(item: Gs2Limit.Counter | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteCounterByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
