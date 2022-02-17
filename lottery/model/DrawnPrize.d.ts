import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class DrawnPrize implements IModel {
    private acquireActions;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DrawnPrize | null;
    toDict(): {
        [key: string]: any;
    };
}
