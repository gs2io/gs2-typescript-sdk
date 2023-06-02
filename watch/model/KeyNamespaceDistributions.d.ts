import IModel from '../../core/interface/IModel';
import KeyNamespaceEncryptDistribution from './KeyNamespaceEncryptDistribution';
import KeyNamespaceDecryptDistribution from './KeyNamespaceDecryptDistribution';
export default class KeyNamespaceDistributions implements IModel {
    private encrypt;
    private decrypt;
    getEncrypt(): KeyNamespaceEncryptDistribution | null;
    setEncrypt(encrypt: KeyNamespaceEncryptDistribution | null): this;
    withEncrypt(encrypt: KeyNamespaceEncryptDistribution | null): this;
    getDecrypt(): KeyNamespaceDecryptDistribution | null;
    setDecrypt(decrypt: KeyNamespaceDecryptDistribution | null): this;
    withDecrypt(decrypt: KeyNamespaceDecryptDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
