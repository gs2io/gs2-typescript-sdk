import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class DrawnPrize implements IModel {
    private prizeId;
    private acquireActions;
    getPrizeId(): string | null;
    setPrizeId(prizeId: string | null): this;
    withPrizeId(prizeId: string | null): this;
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
