import IModel from '../../core/interface/IModel';
import LimitNamespace from './LimitNamespace';
export default class LimitMetrics implements IModel {
    private namespaces;
    getNamespaces(): LimitNamespace[] | null;
    setNamespaces(namespaces: LimitNamespace[] | null): this;
    withNamespaces(namespaces: LimitNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
