import IModel from '../../core/interface/IModel';
export default class MoneyWalletStatistics implements IModel {
    private deposit;
    private depositAmount;
    private withdraw;
    private withdrawAmount;
    private revenue;
    getDeposit(): number | null;
    setDeposit(deposit: number | null): this;
    withDeposit(deposit: number | null): this;
    getDepositAmount(): number | null;
    setDepositAmount(depositAmount: number | null): this;
    withDepositAmount(depositAmount: number | null): this;
    getWithdraw(): number | null;
    setWithdraw(withdraw: number | null): this;
    withWithdraw(withdraw: number | null): this;
    getWithdrawAmount(): number | null;
    setWithdrawAmount(withdrawAmount: number | null): this;
    withWithdrawAmount(withdrawAmount: number | null): this;
    getRevenue(): number | null;
    setRevenue(revenue: number | null): this;
    withRevenue(revenue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
