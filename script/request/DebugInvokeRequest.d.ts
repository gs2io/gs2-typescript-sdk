import IRequest from '../../core/interface/IRequest';
import * as Gs2Script from '../model';
export default class DebugInvokeRequest implements IRequest {
    private requestId;
    private contextStack;
    private script;
    private args;
    private randomStatus;
    private disableStringNumberToNumber;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getScript(): string | null;
    setScript(script: string | null): this;
    withScript(script: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    getRandomStatus(): Gs2Script.RandomStatus | null;
    setRandomStatus(randomStatus: Gs2Script.RandomStatus | null): this;
    withRandomStatus(randomStatus: Gs2Script.RandomStatus | null): this;
    getDisableStringNumberToNumber(): boolean | null;
    setDisableStringNumberToNumber(disableStringNumberToNumber: boolean | null): this;
    withDisableStringNumberToNumber(disableStringNumberToNumber: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DebugInvokeRequest;
    toDict(): {
        [key: string]: any;
    };
}
