import IModel from '../../core/interface/IModel';
import LogSetting from './LogSetting';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private queueNamespaceId;
    private keyId;
    private lotteryTriggerScriptId;
    private choicePrizeTableScriptId;
    private logSetting;
    private createdAt;
    private updatedAt;
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
    getQueueNamespaceId(): string | null;
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getLotteryTriggerScriptId(): string | null;
    setLotteryTriggerScriptId(lotteryTriggerScriptId: string | null): this;
    withLotteryTriggerScriptId(lotteryTriggerScriptId: string | null): this;
    getChoicePrizeTableScriptId(): string | null;
    setChoicePrizeTableScriptId(choicePrizeTableScriptId: string | null): this;
    withChoicePrizeTableScriptId(choicePrizeTableScriptId: string | null): this;
    getLogSetting(): LogSetting | null;
    setLogSetting(logSetting: LogSetting | null): this;
    withLogSetting(logSetting: LogSetting | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Namespace | null;
    toDict(): {
        [key: string]: any;
    };
}