import IResult from '../../core/interface/IResult';
import * as Gs2Formation from '../model';
export default class DescribeMoldModelsResult implements IResult {
    private items;
    getItems(): Gs2Formation.MoldModel[] | null;
    setItems(items: Gs2Formation.MoldModel[] | null): this;
    withItems(items: Gs2Formation.MoldModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMoldModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
