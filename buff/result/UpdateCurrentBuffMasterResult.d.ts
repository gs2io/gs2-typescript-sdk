import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class UpdateCurrentBuffMasterResult implements IResult {
    private item;
    getItem(): Gs2Buff.CurrentBuffMaster | null;
    setItem(item: Gs2Buff.CurrentBuffMaster | null): this;
    withItem(item: Gs2Buff.CurrentBuffMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentBuffMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
