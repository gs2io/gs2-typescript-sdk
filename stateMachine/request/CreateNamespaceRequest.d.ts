import IRequest from '../../core/interface/IRequest';
import * as Gs2StateMachine from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private startScript;
    private passScript;
    private errorScript;
    private lowestStateMachineVersion;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getStartScript(): Gs2StateMachine.ScriptSetting | null;
    setStartScript(startScript: Gs2StateMachine.ScriptSetting | null): this;
    withStartScript(startScript: Gs2StateMachine.ScriptSetting | null): this;
    getPassScript(): Gs2StateMachine.ScriptSetting | null;
    setPassScript(passScript: Gs2StateMachine.ScriptSetting | null): this;
    withPassScript(passScript: Gs2StateMachine.ScriptSetting | null): this;
    getErrorScript(): Gs2StateMachine.ScriptSetting | null;
    setErrorScript(errorScript: Gs2StateMachine.ScriptSetting | null): this;
    withErrorScript(errorScript: Gs2StateMachine.ScriptSetting | null): this;
    getLowestStateMachineVersion(): number | null;
    setLowestStateMachineVersion(lowestStateMachineVersion: number | null): this;
    withLowestStateMachineVersion(lowestStateMachineVersion: number | null): this;
    getLogSetting(): Gs2StateMachine.LogSetting | null;
    setLogSetting(logSetting: Gs2StateMachine.LogSetting | null): this;
    withLogSetting(logSetting: Gs2StateMachine.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}