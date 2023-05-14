import IModel from '../../core/interface/IModel';
import AccountTakeOver from './AccountTakeOver';
export default class AccountNamespace implements IModel {
    private namespaceName;
    private takeOver;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getTakeOver(): AccountTakeOver[] | null;
    setTakeOver(takeOver: AccountTakeOver[] | null): this;
    withTakeOver(takeOver: AccountTakeOver[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
