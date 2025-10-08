import IRequest from '../../core/interface/IRequest';
import * as Gs2Script from '../model';
export default class InvokeScriptRequest implements IRequest {
    private requestId;
    private contextStack;
    private scriptId;
    private userId;
    private args;
    private randomStatus;
    private timeOffsetToken;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getRandomStatus(): Gs2Script.RandomStatus | null;
    setRandomStatus(randomStatus: Gs2Script.RandomStatus | null): this;
    withRandomStatus(randomStatus: Gs2Script.RandomStatus | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InvokeScriptRequest;
    toDict(): {
        [key: string]: any;
    };
}
