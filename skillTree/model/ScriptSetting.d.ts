import IModel from '../../core/interface/IModel';
export default class ScriptSetting implements IModel {
    private triggerScriptId;
    private doneTriggerTargetType;
    private doneTriggerScriptId;
    private doneTriggerQueueNamespaceId;
    getTriggerScriptId(): string | null;
    setTriggerScriptId(triggerScriptId: string | null): this;
    withTriggerScriptId(triggerScriptId: string | null): this;
    getDoneTriggerTargetType(): string | null;
    setDoneTriggerTargetType(doneTriggerTargetType: string | null): this;
    withDoneTriggerTargetType(doneTriggerTargetType: string | null): this;
    getDoneTriggerScriptId(): string | null;
    setDoneTriggerScriptId(doneTriggerScriptId: string | null): this;
    withDoneTriggerScriptId(doneTriggerScriptId: string | null): this;
    getDoneTriggerQueueNamespaceId(): string | null;
    setDoneTriggerQueueNamespaceId(doneTriggerQueueNamespaceId: string | null): this;
    withDoneTriggerQueueNamespaceId(doneTriggerQueueNamespaceId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ScriptSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
