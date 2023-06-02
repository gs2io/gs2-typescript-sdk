import IModel from '../../core/interface/IModel';
import MoneyNamespaceVerificationDistribution from './MoneyNamespaceVerificationDistribution';
import MoneyNamespaceDepositDistribution from './MoneyNamespaceDepositDistribution';
import MoneyNamespaceWithdrawDistribution from './MoneyNamespaceWithdrawDistribution';
import MoneyNamespaceRevenueDistribution from './MoneyNamespaceRevenueDistribution';
export default class MoneyNamespaceDistributions implements IModel {
    private verification;
    private deposit;
    private withdraw;
    private revenue;
    getVerification(): MoneyNamespaceVerificationDistribution | null;
    setVerification(verification: MoneyNamespaceVerificationDistribution | null): this;
    withVerification(verification: MoneyNamespaceVerificationDistribution | null): this;
    getDeposit(): MoneyNamespaceDepositDistribution | null;
    setDeposit(deposit: MoneyNamespaceDepositDistribution | null): this;
    withDeposit(deposit: MoneyNamespaceDepositDistribution | null): this;
    getWithdraw(): MoneyNamespaceWithdrawDistribution | null;
    setWithdraw(withdraw: MoneyNamespaceWithdrawDistribution | null): this;
    withWithdraw(withdraw: MoneyNamespaceWithdrawDistribution | null): this;
    getRevenue(): MoneyNamespaceRevenueDistribution | null;
    setRevenue(revenue: MoneyNamespaceRevenueDistribution | null): this;
    withRevenue(revenue: MoneyNamespaceRevenueDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
