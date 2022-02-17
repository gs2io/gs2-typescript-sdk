import IRequest from '../../core/interface/IRequest';
import * as Gs2Matchmaking from '../model';
export default class DoMatchmakingByPlayerRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private player;
    private matchmakingContextToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getPlayer(): Gs2Matchmaking.Player | null;
    setPlayer(player: Gs2Matchmaking.Player | null): this;
    withPlayer(player: Gs2Matchmaking.Player | null): this;
    getMatchmakingContextToken(): string | null;
    setMatchmakingContextToken(matchmakingContextToken: string | null): this;
    withMatchmakingContextToken(matchmakingContextToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DoMatchmakingByPlayerRequest;
    toDict(): {
        [key: string]: any;
    };
}
