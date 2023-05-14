import IModel from '../../core/interface/IModel';
import AccountNamespace from './AccountNamespace';
export default class AccountMetrics implements IModel {
    private namespaces;
    getNamespaces(): AccountNamespace[] | null;
    setNamespaces(namespaces: AccountNamespace[] | null): this;
    withNamespaces(namespaces: AccountNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
