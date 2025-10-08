import IResult from '../../core/interface/IResult';
import * as Gs2Lock from '../model';
export default class GetMutexByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Lock.Mutex | null;
    setItem(item: Gs2Lock.Mutex | null): this;
    withItem(item: Gs2Lock.Mutex | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMutexByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
