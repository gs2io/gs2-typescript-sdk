import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class Reward implements IModel {
    private acquireActions;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Reward | null;
    toDict(): {
        [key: string]: any;
    };
}
