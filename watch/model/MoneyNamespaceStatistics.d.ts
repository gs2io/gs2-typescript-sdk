import IModel from '../../core/interface/IModel';
export default class MoneyNamespaceStatistics implements IModel {
    private verification;
    private deposit;
    private withdraw;
    private revenue;
    getVerification(): number | null;
    setVerification(verification: number | null): this;
    withVerification(verification: number | null): this;
    getDeposit(): number | null;
    setDeposit(deposit: number | null): this;
    withDeposit(deposit: number | null): this;
    getWithdraw(): number | null;
    setWithdraw(withdraw: number | null): this;
    withWithdraw(withdraw: number | null): this;
    getRevenue(): number | null;
    setRevenue(revenue: number | null): this;
    withRevenue(revenue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
