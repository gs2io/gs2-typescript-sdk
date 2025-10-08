import IModel from '../../core/interface/IModel';
export default class WalletSummary implements IModel {
    private paid;
    private free;
    private total;
    getPaid(): number | null;
    setPaid(paid: number | null): this;
    withPaid(paid: number | null): this;
    getFree(): number | null;
    setFree(free: number | null): this;
    withFree(free: number | null): this;
    getTotal(): number | null;
    setTotal(total: number | null): this;
    withTotal(total: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WalletSummary | null;
    toDict(): {
        [key: string]: any;
    };
}
