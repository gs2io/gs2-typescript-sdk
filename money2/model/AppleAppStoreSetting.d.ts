import IModel from '../../core/interface/IModel';
export default class AppleAppStoreSetting implements IModel {
    private bundleId;
    getBundleId(): string | null;
    setBundleId(bundleId: string | null): this;
    withBundleId(bundleId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AppleAppStoreSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
