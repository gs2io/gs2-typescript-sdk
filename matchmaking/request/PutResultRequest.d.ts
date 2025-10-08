import IRequest from '../../core/interface/IRequest';
import * as Gs2Matchmaking from '../model';
export default class PutResultRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private ratingName;
    private gameResults;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRatingName(): string | null;
    setRatingName(ratingName: string | null): this;
    withRatingName(ratingName: string | null): this;
    getGameResults(): Gs2Matchmaking.GameResult[] | null;
    setGameResults(gameResults: Gs2Matchmaking.GameResult[] | null): this;
    withGameResults(gameResults: Gs2Matchmaking.GameResult[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutResultRequest;
    toDict(): {
        [key: string]: any;
    };
}
