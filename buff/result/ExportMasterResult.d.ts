import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class ExportMasterResult implements IResult {
    private item;
    getItem(): Gs2Buff.CurrentBuffMaster | null;
    setItem(item: Gs2Buff.CurrentBuffMaster | null): this;
    withItem(item: Gs2Buff.CurrentBuffMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExportMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
