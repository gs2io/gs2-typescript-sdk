import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class PushByUserIdResult implements IResult {
    private items;
    getItems(): Gs2JobQueue.Job[] | null;
    setItems(items: Gs2JobQueue.Job[] | null): this;
    withItems(items: Gs2JobQueue.Job[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PushByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
