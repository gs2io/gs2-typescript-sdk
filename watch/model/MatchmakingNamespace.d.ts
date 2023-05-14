import IModel from '../../core/interface/IModel';
import MatchmakingStatistics from './MatchmakingStatistics';
import MatchmakingRole from './MatchmakingRole';
export default class MatchmakingNamespace implements IModel {
    private namespaceName;
    private statistics;
    private role;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStatistics(): MatchmakingStatistics | null;
    setStatistics(statistics: MatchmakingStatistics | null): this;
    withStatistics(statistics: MatchmakingStatistics | null): this;
    getRole(): MatchmakingRole[] | null;
    setRole(role: MatchmakingRole[] | null): this;
    withRole(role: MatchmakingRole[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
