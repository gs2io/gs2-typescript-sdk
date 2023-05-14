import IModel from '../../core/interface/IModel';
import InboxNamespace from './InboxNamespace';
export default class InboxMetrics implements IModel {
    private namespaces;
    getNamespaces(): InboxNamespace[] | null;
    setNamespaces(namespaces: InboxNamespace[] | null): this;
    withNamespaces(namespaces: InboxNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
