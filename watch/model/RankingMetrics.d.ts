import IModel from '../../core/interface/IModel';
import RankingNamespace from './RankingNamespace';
export default class RankingMetrics implements IModel {
    private namespaces;
    getNamespaces(): RankingNamespace[] | null;
    setNamespaces(namespaces: RankingNamespace[] | null): this;
    withNamespaces(namespaces: RankingNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
