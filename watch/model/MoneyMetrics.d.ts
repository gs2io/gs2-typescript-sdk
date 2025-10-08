import IModel from '../../core/interface/IModel';
import MoneyNamespace from './MoneyNamespace';
export default class MoneyMetrics implements IModel {
    private namespaces;
    getNamespaces(): MoneyNamespace[] | null;
    setNamespaces(namespaces: MoneyNamespace[] | null): this;
    withNamespaces(namespaces: MoneyNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
