import IModel from '../../core/interface/IModel';
export default class KeyNamespaceStatistics implements IModel {
    private encrypt;
    private decrypt;
    getEncrypt(): number | null;
    setEncrypt(encrypt: number | null): this;
    withEncrypt(encrypt: number | null): this;
    getDecrypt(): number | null;
    setDecrypt(decrypt: number | null): this;
    withDecrypt(decrypt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): KeyNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
