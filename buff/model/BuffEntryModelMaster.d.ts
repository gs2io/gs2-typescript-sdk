import IModel from '../../core/interface/IModel';
import BuffTargetModel from './BuffTargetModel';
import BuffTargetAction from './BuffTargetAction';
export default class BuffEntryModelMaster implements IModel {
    private buffEntryModelId;
    private name;
    private description;
    private metadata;
    private expression;
    private targetType;
    private targetModel;
    private targetAction;
    private priority;
    private applyPeriodScheduleEventId;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getBuffEntryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, buffEntryName: string | null): string | null;
    getBuffEntryModelId(): string | null;
    setBuffEntryModelId(buffEntryModelId: string | null): this;
    withBuffEntryModelId(buffEntryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getExpression(): string | null;
    setExpression(expression: string | null): this;
    withExpression(expression: string | null): this;
    getTargetType(): string | null;
    setTargetType(targetType: string | null): this;
    withTargetType(targetType: string | null): this;
    getTargetModel(): BuffTargetModel | null;
    setTargetModel(targetModel: BuffTargetModel | null): this;
    withTargetModel(targetModel: BuffTargetModel | null): this;
    getTargetAction(): BuffTargetAction | null;
    setTargetAction(targetAction: BuffTargetAction | null): this;
    withTargetAction(targetAction: BuffTargetAction | null): this;
    getPriority(): number | null;
    setPriority(priority: number | null): this;
    withPriority(priority: number | null): this;
    getApplyPeriodScheduleEventId(): string | null;
    setApplyPeriodScheduleEventId(applyPeriodScheduleEventId: string | null): this;
    withApplyPeriodScheduleEventId(applyPeriodScheduleEventId: string | null): this;
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
    }): BuffEntryModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}