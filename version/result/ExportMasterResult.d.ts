import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class ExportMasterResult implements IResult {
    private item;
    getItem(): Gs2Version.CurrentVersionMaster | null;
    setItem(item: Gs2Version.CurrentVersionMaster | null): this;
    withItem(item: Gs2Version.CurrentVersionMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExportMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
