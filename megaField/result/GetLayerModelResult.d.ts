import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class GetLayerModelResult implements IResult {
    private item;
    getItem(): Gs2MegaField.LayerModel | null;
    setItem(item: Gs2MegaField.LayerModel | null): this;
    withItem(item: Gs2MegaField.LayerModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLayerModelResult;
    toDict(): {
        [key: string]: any;
    };
}
