import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribeFormModelsResult implements IResult {
    private items;
    getItems(): Gs2Formation.FormModel[] | null;
    setItems(items: Gs2Formation.FormModel[] | null): this;
    withItems(items: Gs2Formation.FormModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFormModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
