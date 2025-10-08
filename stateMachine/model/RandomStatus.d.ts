import IModel from '../../core/interface/IModel';
import * as Gs2StateMachine from '../../stateMachine/model';
export default class RandomStatus implements IModel {
    private seed;
    private used;
    getSeed(): number | null;
    setSeed(seed: number | null): this;
    withSeed(seed: number | null): this;
    getUsed(): Gs2StateMachine.RandomUsed[] | null;
    setUsed(used: Gs2StateMachine.RandomUsed[] | null): this;
    withUsed(used: Gs2StateMachine.RandomUsed[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
