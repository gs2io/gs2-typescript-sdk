import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class PushByUserIdResult implements IResult {
    private items;
    private autoRun;
    getItems(): Gs2JobQueue.Job[] | null;
    setItems(items: Gs2JobQueue.Job[] | null): this;
    withItems(items: Gs2JobQueue.Job[] | null): this;
    getAutoRun(): boolean | null;
    setAutoRun(autoRun: boolean | null): this;
    withAutoRun(autoRun: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PushByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
