import IRequest from '../../core/interface/IRequest';
import * as Gs2Datastore from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private logSetting;
    private doneUploadScript;
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
    getLogSetting(): Gs2Datastore.LogSetting | null;
    setLogSetting(logSetting: Gs2Datastore.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Datastore.LogSetting | null): this;
    getDoneUploadScript(): Gs2Datastore.ScriptSetting | null;
    setDoneUploadScript(doneUploadScript: Gs2Datastore.ScriptSetting | null): this;
    withDoneUploadScript(doneUploadScript: Gs2Datastore.ScriptSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
