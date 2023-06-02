import IModel from '../../core/interface/IModel';
import MatchmakingNamespaceResultDistribution from './MatchmakingNamespaceResultDistribution';
import MatchmakingNamespaceWaitElapsedSecondsDistribution from './MatchmakingNamespaceWaitElapsedSecondsDistribution';
export default class MatchmakingNamespaceDistributions implements IModel {
    private result;
    private waitElapsedSeconds;
    getResult(): MatchmakingNamespaceResultDistribution | null;
    setResult(result: MatchmakingNamespaceResultDistribution | null): this;
    withResult(result: MatchmakingNamespaceResultDistribution | null): this;
    getWaitElapsedSeconds(): MatchmakingNamespaceWaitElapsedSecondsDistribution | null;
    setWaitElapsedSeconds(waitElapsedSeconds: MatchmakingNamespaceWaitElapsedSecondsDistribution | null): this;
    withWaitElapsedSeconds(waitElapsedSeconds: MatchmakingNamespaceWaitElapsedSecondsDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
