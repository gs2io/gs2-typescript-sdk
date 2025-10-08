import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribePropertyFormModelsResult implements IResult {
    private items;
    getItems(): Gs2Formation.PropertyFormModel[] | null;
    setItems(items: Gs2Formation.PropertyFormModel[] | null): this;
    withItems(items: Gs2Formation.PropertyFormModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribePropertyFormModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
