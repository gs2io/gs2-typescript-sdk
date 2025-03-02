import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class StoreSubscriptionContentModel implements IModel {
    private storeSubscriptionContentModelId;
    private name;
    private metadata;
    private scheduleNamespaceId;
    private triggerName;
    private appleAppStore;
    private googlePlay;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getContentName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, contentName: string | null): string | null;
    getStoreSubscriptionContentModelId(): string | null;
    setStoreSubscriptionContentModelId(storeSubscriptionContentModelId: string | null): this;
    withStoreSubscriptionContentModelId(storeSubscriptionContentModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getScheduleNamespaceId(): string | null;
    setScheduleNamespaceId(scheduleNamespaceId: string | null): this;
    withScheduleNamespaceId(scheduleNamespaceId: string | null): this;
    getTriggerName(): string | null;
    setTriggerName(triggerName: string | null): this;
    withTriggerName(triggerName: string | null): this;
    getAppleAppStore(): Gs2Money2.AppleAppStoreSubscriptionContent | null;
    setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent | null): this;
    withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSubscriptionContent | null): this;
    getGooglePlay(): Gs2Money2.GooglePlaySubscriptionContent | null;
    setGooglePlay(googlePlay: Gs2Money2.GooglePlaySubscriptionContent | null): this;
    withGooglePlay(googlePlay: Gs2Money2.GooglePlaySubscriptionContent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StoreSubscriptionContentModel | null;
    toDict(): {
        [key: string]: any;
    };
}
