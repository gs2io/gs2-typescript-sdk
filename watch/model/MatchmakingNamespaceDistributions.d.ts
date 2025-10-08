import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MatchmakingNamespaceDistributions implements IModel {
    private result;
    private waitElapsedSeconds;
    getResult(): Gs2Watch.MatchmakingNamespaceResultDistribution | null;
    setResult(result: Gs2Watch.MatchmakingNamespaceResultDistribution | null): this;
    withResult(result: Gs2Watch.MatchmakingNamespaceResultDistribution | null): this;
    getWaitElapsedSeconds(): Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution | null;
    setWaitElapsedSeconds(waitElapsedSeconds: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution | null): this;
    withWaitElapsedSeconds(waitElapsedSeconds: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
