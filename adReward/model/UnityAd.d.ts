import IModel from '../../core/interface/IModel';
export default class UnityAd implements IModel {
    private keys;
    getKeys(): string[] | null;
    setKeys(keys: string[] | null): this;
    withKeys(keys: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnityAd | null;
    toDict(): {
        [key: string]: any;
    };
}
