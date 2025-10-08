import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class StoreContentModel implements IModel {
    private storeContentModelId;
    private name;
    private metadata;
    private appleAppStore;
    private googlePlay;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getContentName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, contentName: string | null): string | null;
    getStoreContentModelId(): string | null;
    setStoreContentModelId(storeContentModelId: string | null): this;
    withStoreContentModelId(storeContentModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getAppleAppStore(): Gs2Money2.AppleAppStoreContent | null;
    setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreContent | null): this;
    withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreContent | null): this;
    getGooglePlay(): Gs2Money2.GooglePlayContent | null;
    setGooglePlay(googlePlay: Gs2Money2.GooglePlayContent | null): this;
    withGooglePlay(googlePlay: Gs2Money2.GooglePlayContent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StoreContentModel | null;
    toDict(): {
        [key: string]: any;
    };
}
