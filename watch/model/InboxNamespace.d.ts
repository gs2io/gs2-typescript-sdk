import IModel from '../../core/interface/IModel';
import InboxStatistics from './InboxStatistics';
export default class InboxNamespace implements IModel {
    private namespaceName;
    private statistics;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStatistics(): InboxStatistics | null;
    setStatistics(statistics: InboxStatistics | null): this;
    withStatistics(statistics: InboxStatistics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
