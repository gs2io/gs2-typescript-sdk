import IModel from '../../core/interface/IModel';
import RandomUsed from './RandomUsed';
export default class RandomStatus implements IModel {
    private seed;
    private used;
    getSeed(): number | null;
    setSeed(seed: number | null): this;
    withSeed(seed: number | null): this;
    getUsed(): RandomUsed[] | null;
    setUsed(used: RandomUsed[] | null): this;
    withUsed(used: RandomUsed[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
