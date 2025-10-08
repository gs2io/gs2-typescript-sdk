import IModel from '../../core/interface/IModel';
import MatchmakingNamespace from './MatchmakingNamespace';
export default class MatchmakingMetrics implements IModel {
    private namespaces;
    getNamespaces(): MatchmakingNamespace[] | null;
    setNamespaces(namespaces: MatchmakingNamespace[] | null): this;
    withNamespaces(namespaces: MatchmakingNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
