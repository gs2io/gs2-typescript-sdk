import IModel from '../../core/interface/IModel';
import * as Gs2Lottery from '../../lottery/model';
export default class DrawnPrize implements IModel {
    private prizeId;
    private acquireActions;
    getPrizeId(): string | null;
    setPrizeId(prizeId: string | null): this;
    withPrizeId(prizeId: string | null): this;
    getAcquireActions(): Gs2Lottery.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Lottery.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Lottery.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DrawnPrize | null;
    toDict(): {
        [key: string]: any;
    };
}
