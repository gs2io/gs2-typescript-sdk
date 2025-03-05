import IModel from '../../core/interface/IModel';
export default class GooglePlaySetting implements IModel {
    private packageName;
    private publicKey;
    getPackageName(): string | null;
    setPackageName(packageName: string | null): this;
    withPackageName(packageName: string | null): this;
    getPublicKey(): string | null;
    setPublicKey(publicKey: string | null): this;
    withPublicKey(publicKey: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GooglePlaySetting | null;
    toDict(): {
        [key: string]: any;
    };
}
