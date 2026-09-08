import IModel from '../../core/interface/IModel';
import * as Gs2Grade from '../../grade/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private changeGradeScript;
    private logSetting;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null): string | null;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    /** @deprecated */
    getTransactionSetting(): Gs2Grade.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Grade.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Grade.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Grade.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Grade.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Grade.TransactionSettingV2 | null): this;
    getChangeGradeScript(): Gs2Grade.ScriptSetting | null;
    setChangeGradeScript(changeGradeScript: Gs2Grade.ScriptSetting | null): this;
    withChangeGradeScript(changeGradeScript: Gs2Grade.ScriptSetting | null): this;
    getLogSetting(): Gs2Grade.LogSetting | null;
    setLogSetting(logSetting: Gs2Grade.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Grade.LogSetting | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Namespace | null;
    toDict(): {
        [key: string]: any;
    };
}
