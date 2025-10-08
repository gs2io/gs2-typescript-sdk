import IModel from '../../core/interface/IModel';
export default class AppleAppStoreSetting implements IModel {
    private bundleId;
    private sharedSecretKey;
    private issuerId;
    private keyId;
    private privateKeyPem;
    getBundleId(): string | null;
    setBundleId(bundleId: string | null): this;
    withBundleId(bundleId: string | null): this;
    getSharedSecretKey(): string | null;
    setSharedSecretKey(sharedSecretKey: string | null): this;
    withSharedSecretKey(sharedSecretKey: string | null): this;
    getIssuerId(): string | null;
    setIssuerId(issuerId: string | null): this;
    withIssuerId(issuerId: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getPrivateKeyPem(): string | null;
    setPrivateKeyPem(privateKeyPem: string | null): this;
    withPrivateKeyPem(privateKeyPem: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AppleAppStoreSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
