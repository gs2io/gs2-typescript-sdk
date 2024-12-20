import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class KeyNamespaceDistributions implements IModel {
    private encrypt;
    private decrypt;
    getEncrypt(): Gs2Watch.KeyNamespaceEncryptDistribution | null;
    setEncrypt(encrypt: Gs2Watch.KeyNamespaceEncryptDistribution | null): this;
    withEncrypt(encrypt: Gs2Watch.KeyNamespaceEncryptDistribution | null): this;
    getDecrypt(): Gs2Watch.KeyNamespaceDecryptDistribution | null;
    setDecrypt(decrypt: Gs2Watch.KeyNamespaceDecryptDistribution | null): this;
    withDecrypt(decrypt: Gs2Watch.KeyNamespaceDecryptDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
