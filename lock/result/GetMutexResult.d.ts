import IResult from '../../core/interface/IResult';
import * as Gs2Lock from '../model';
export default class GetMutexResult implements IResult {
    private item;
    getItem(): Gs2Lock.Mutex | null;
    setItem(item: Gs2Lock.Mutex | null): this;
    withItem(item: Gs2Lock.Mutex | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMutexResult;
    toDict(): {
        [key: string]: any;
    };
}
