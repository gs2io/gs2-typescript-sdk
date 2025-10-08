import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class PredictionByUserIdResult implements IResult {
    private items;
    private status;
    getItems(): Gs2Idle.AcquireAction[] | null;
    setItems(items: Gs2Idle.AcquireAction[] | null): this;
    withItems(items: Gs2Idle.AcquireAction[] | null): this;
    getStatus(): Gs2Idle.Status | null;
    setStatus(status: Gs2Idle.Status | null): this;
    withStatus(status: Gs2Idle.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PredictionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
