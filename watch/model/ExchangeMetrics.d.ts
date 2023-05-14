import IModel from '../../core/interface/IModel';
import ExchangeNamespace from './ExchangeNamespace';
export default class ExchangeMetrics implements IModel {
    private namespaces;
    getNamespaces(): ExchangeNamespace[] | null;
    setNamespaces(namespaces: ExchangeNamespace[] | null): this;
    withNamespaces(namespaces: ExchangeNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
