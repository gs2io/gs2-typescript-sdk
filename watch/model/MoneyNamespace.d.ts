import IModel from '../../core/interface/IModel';
import MoneyStatistics from './MoneyStatistics';
import MoneyBalanceDistribution from './MoneyBalanceDistribution';
import MoneyBillingDistribution from './MoneyBillingDistribution';
export default class MoneyNamespace implements IModel {
    private namespaceName;
    private statistics;
    private balanceDistribution;
    private billingDistribution;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStatistics(): MoneyStatistics | null;
    setStatistics(statistics: MoneyStatistics | null): this;
    withStatistics(statistics: MoneyStatistics | null): this;
    getBalanceDistribution(): MoneyBalanceDistribution[] | null;
    setBalanceDistribution(balanceDistribution: MoneyBalanceDistribution[] | null): this;
    withBalanceDistribution(balanceDistribution: MoneyBalanceDistribution[] | null): this;
    getBillingDistribution(): MoneyBillingDistribution[] | null;
    setBillingDistribution(billingDistribution: MoneyBillingDistribution[] | null): this;
    withBillingDistribution(billingDistribution: MoneyBillingDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
