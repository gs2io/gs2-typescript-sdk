import IModel from '../../core/interface/IModel';
import * as Gs2Buff from '../../buff/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private applyBuffScript;
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
    getApplyBuffScript(): Gs2Buff.ScriptSetting | null;
    setApplyBuffScript(applyBuffScript: Gs2Buff.ScriptSetting | null): this;
    withApplyBuffScript(applyBuffScript: Gs2Buff.ScriptSetting | null): this;
    getLogSetting(): Gs2Buff.LogSetting | null;
    setLogSetting(logSetting: Gs2Buff.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Buff.LogSetting | null): this;
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
