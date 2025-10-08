import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class ExportMasterResult implements IResult {
    private item;
    getItem(): Gs2MegaField.CurrentFieldMaster | null;
    setItem(item: Gs2MegaField.CurrentFieldMaster | null): this;
    withItem(item: Gs2MegaField.CurrentFieldMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExportMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
