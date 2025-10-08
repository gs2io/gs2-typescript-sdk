import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class DescribeAreaModelsResult implements IResult {
    private items;
    getItems(): Gs2MegaField.AreaModel[] | null;
    setItems(items: Gs2MegaField.AreaModel[] | null): this;
    withItems(items: Gs2MegaField.AreaModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeAreaModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
