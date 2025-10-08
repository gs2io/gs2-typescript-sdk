import IModel from '../../core/interface/IModel';
import * as Gs2Lottery from '../../lottery/model';
export default class BoxItem implements IModel {
    private prizeId;
    private acquireActions;
    private remaining;
    private initial;
    getPrizeId(): string | null;
    setPrizeId(prizeId: string | null): this;
    withPrizeId(prizeId: string | null): this;
    getAcquireActions(): Gs2Lottery.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Lottery.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Lottery.AcquireAction[] | null): this;
    getRemaining(): number | null;
    setRemaining(remaining: number | null): this;
    withRemaining(remaining: number | null): this;
    getInitial(): number | null;
    setInitial(initial: number | null): this;
    withInitial(initial: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BoxItem | null;
    toDict(): {
        [key: string]: any;
    };
}
