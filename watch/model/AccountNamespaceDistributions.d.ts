import IModel from '../../core/interface/IModel';
import AccountNamespaceTypeDistribution from './AccountNamespaceTypeDistribution';
export default class AccountNamespaceDistributions implements IModel {
    private type;
    getType(): AccountNamespaceTypeDistribution | null;
    setType(type: AccountNamespaceTypeDistribution | null): this;
    withType(type: AccountNamespaceTypeDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
