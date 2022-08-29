import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class UpdateLayerModelMasterResult implements IResult {
    private item;
    getItem(): Gs2MegaField.LayerModelMaster | null;
    setItem(item: Gs2MegaField.LayerModelMaster | null): this;
    withItem(item: Gs2MegaField.LayerModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateLayerModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
