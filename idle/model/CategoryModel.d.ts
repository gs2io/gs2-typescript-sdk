import IModel from '../../core/interface/IModel';
import AcquireActionList from './AcquireActionList';
export default class CategoryModel implements IModel {
    private categoryModelId;
    private name;
    private metadata;
    private rewardIntervalMinutes;
    private defaultMaximumIdleMinutes;
    private acquireActions;
    private idlePeriodScheduleId;
    private receivePeriodScheduleId;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCategoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, categoryName: string | null): string | null;
    getCategoryModelId(): string | null;
    setCategoryModelId(categoryModelId: string | null): this;
    withCategoryModelId(categoryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getRewardIntervalMinutes(): number | null;
    setRewardIntervalMinutes(rewardIntervalMinutes: number | null): this;
    withRewardIntervalMinutes(rewardIntervalMinutes: number | null): this;
    getDefaultMaximumIdleMinutes(): number | null;
    setDefaultMaximumIdleMinutes(defaultMaximumIdleMinutes: number | null): this;
    withDefaultMaximumIdleMinutes(defaultMaximumIdleMinutes: number | null): this;
    getAcquireActions(): AcquireActionList[] | null;
    setAcquireActions(acquireActions: AcquireActionList[] | null): this;
    withAcquireActions(acquireActions: AcquireActionList[] | null): this;
    getIdlePeriodScheduleId(): string | null;
    setIdlePeriodScheduleId(idlePeriodScheduleId: string | null): this;
    withIdlePeriodScheduleId(idlePeriodScheduleId: string | null): this;
    getReceivePeriodScheduleId(): string | null;
    setReceivePeriodScheduleId(receivePeriodScheduleId: string | null): this;
    withReceivePeriodScheduleId(receivePeriodScheduleId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CategoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
