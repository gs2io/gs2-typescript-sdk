import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class Prize implements IModel {
    private prizeId;
    private type;
    private acquireActions;
    private drawnLimit;
    private limitFailOverPrizeId;
    private prizeTableName;
    private weight;
    getPrizeId(): string | null;
    setPrizeId(prizeId: string | null): this;
    withPrizeId(prizeId: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    getDrawnLimit(): number | null;
    setDrawnLimit(drawnLimit: number | null): this;
    withDrawnLimit(drawnLimit: number | null): this;
    getLimitFailOverPrizeId(): string | null;
    setLimitFailOverPrizeId(limitFailOverPrizeId: string | null): this;
    withLimitFailOverPrizeId(limitFailOverPrizeId: string | null): this;
    getPrizeTableName(): string | null;
    setPrizeTableName(prizeTableName: string | null): this;
    withPrizeTableName(prizeTableName: string | null): this;
    getWeight(): number | null;
    setWeight(weight: number | null): this;
    withWeight(weight: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Prize | null;
    toDict(): {
        [key: string]: any;
    };
}
