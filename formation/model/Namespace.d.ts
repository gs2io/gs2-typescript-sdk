import IModel from '../../core/interface/IModel';
import * as Gs2Formation from '../../formation/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private transactionSetting;
    private updateMoldScript;
    private updateFormScript;
    private updatePropertyFormScript;
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
