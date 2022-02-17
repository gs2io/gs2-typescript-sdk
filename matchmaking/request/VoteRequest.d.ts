import IRequest from '../../core/interface/IRequest';
import * as Gs2Matchmaking from '../model';
export default class VoteRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private ballotBody;
    private ballotSignature;
    private gameResults;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getBallotBody(): string | null;
    setBallotBody(ballotBody: string | null): this;
    withBallotBody(ballotBody: string | null): this;
    getBallotSignature(): string | null;
    setBallotSignature(ballotSignature: string | null): this;
    withBallotSignature(ballotSignature: string | null): this;
    getGameResults(): Gs2Matchmaking.GameResult[] | null;
    setGameResults(gameResults: Gs2Matchmaking.GameResult[] | null): this;
    withGameResults(gameResults: Gs2Matchmaking.GameResult[] | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VoteRequest;
    toDict(): {
        [key: string]: any;
    };
}
