import IModel from '../../core/interface/IModel';
import AppleAppStoreContent from './AppleAppStoreContent';
import GooglePlayContent from './GooglePlayContent';
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
    getAppleAppStore(): AppleAppStoreContent | null;
    setAppleAppStore(appleAppStore: AppleAppStoreContent | null): this;
    withAppleAppStore(appleAppStore: AppleAppStoreContent | null): this;
    getGooglePlay(): GooglePlayContent | null;
    setGooglePlay(googlePlay: GooglePlayContent | null): this;
    withGooglePlay(googlePlay: GooglePlayContent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StoreContentModel | null;
    toDict(): {
        [key: string]: any;
    };
}
