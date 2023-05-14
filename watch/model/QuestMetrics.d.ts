import IModel from '../../core/interface/IModel';
import QuestNamespace from './QuestNamespace';
export default class QuestMetrics implements IModel {
    private namespaces;
    getNamespaces(): QuestNamespace[] | null;
    setNamespaces(namespaces: QuestNamespace[] | null): this;
    withNamespaces(namespaces: QuestNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
