import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class DescribeLayerModelsResult implements IResult {
    private items;
    getItems(): Gs2MegaField.LayerModel[] | null;
    setItems(items: Gs2MegaField.LayerModel[] | null): this;
    withItems(items: Gs2MegaField.LayerModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLayerModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
