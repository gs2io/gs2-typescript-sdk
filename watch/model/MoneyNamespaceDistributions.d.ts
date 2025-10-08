import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyNamespaceDistributions implements IModel {
    private verification;
    private deposit;
    private withdraw;
    private revenue;
    getVerification(): Gs2Watch.MoneyNamespaceVerificationDistribution | null;
    setVerification(verification: Gs2Watch.MoneyNamespaceVerificationDistribution | null): this;
    withVerification(verification: Gs2Watch.MoneyNamespaceVerificationDistribution | null): this;
    getDeposit(): Gs2Watch.MoneyNamespaceDepositDistribution | null;
    setDeposit(deposit: Gs2Watch.MoneyNamespaceDepositDistribution | null): this;
    withDeposit(deposit: Gs2Watch.MoneyNamespaceDepositDistribution | null): this;
    getWithdraw(): Gs2Watch.MoneyNamespaceWithdrawDistribution | null;
    setWithdraw(withdraw: Gs2Watch.MoneyNamespaceWithdrawDistribution | null): this;
    withWithdraw(withdraw: Gs2Watch.MoneyNamespaceWithdrawDistribution | null): this;
    getRevenue(): Gs2Watch.MoneyNamespaceRevenueDistribution | null;
    setRevenue(revenue: Gs2Watch.MoneyNamespaceRevenueDistribution | null): this;
    withRevenue(revenue: Gs2Watch.MoneyNamespaceRevenueDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
