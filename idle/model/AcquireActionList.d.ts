import IModel from '../../core/interface/IModel';
import * as Gs2Idle from '../../idle/model';
export default class AcquireActionList implements IModel {
    private acquireActions;
    getAcquireActions(): Gs2Idle.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Idle.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Idle.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionList | null;
    toDict(): {
        [key: string]: any;
    };
}
