import IRequest from '../../core/interface/IRequest';
import * as Gs2SkillTree from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private releaseScript;
    private restrainScript;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    /** @deprecated */
    getTransactionSetting(): Gs2SkillTree.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2SkillTree.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2SkillTree.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2SkillTree.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2SkillTree.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2SkillTree.TransactionSettingV2 | null): this;
    getReleaseScript(): Gs2SkillTree.ScriptSetting | null;
    setReleaseScript(releaseScript: Gs2SkillTree.ScriptSetting | null): this;
    withReleaseScript(releaseScript: Gs2SkillTree.ScriptSetting | null): this;
    getRestrainScript(): Gs2SkillTree.ScriptSetting | null;
    setRestrainScript(restrainScript: Gs2SkillTree.ScriptSetting | null): this;
    withRestrainScript(restrainScript: Gs2SkillTree.ScriptSetting | null): this;
    getLogSetting(): Gs2SkillTree.LogSetting | null;
    setLogSetting(logSetting: Gs2SkillTree.LogSetting | null): this;
    withLogSetting(logSetting: Gs2SkillTree.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
