import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private updateMoldScript;
    private updateFormScript;
    private updatePropertyFormScript;
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
    getTransactionSetting(): Gs2Formation.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Formation.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Formation.TransactionSetting | null): this;
    getUpdateMoldScript(): Gs2Formation.ScriptSetting | null;
    setUpdateMoldScript(updateMoldScript: Gs2Formation.ScriptSetting | null): this;
    withUpdateMoldScript(updateMoldScript: Gs2Formation.ScriptSetting | null): this;
    getUpdateFormScript(): Gs2Formation.ScriptSetting | null;
    setUpdateFormScript(updateFormScript: Gs2Formation.ScriptSetting | null): this;
    withUpdateFormScript(updateFormScript: Gs2Formation.ScriptSetting | null): this;
    getUpdatePropertyFormScript(): Gs2Formation.ScriptSetting | null;
    setUpdatePropertyFormScript(updatePropertyFormScript: Gs2Formation.ScriptSetting | null): this;
    withUpdatePropertyFormScript(updatePropertyFormScript: Gs2Formation.ScriptSetting | null): this;
    getLogSetting(): Gs2Formation.LogSetting | null;
    setLogSetting(logSetting: Gs2Formation.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Formation.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
