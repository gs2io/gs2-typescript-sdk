import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class DescribeTakeOverTypeModelsResult implements IResult {
    private items;
    getItems(): Gs2Account.TakeOverTypeModel[] | null;
    setItems(items: Gs2Account.TakeOverTypeModel[] | null): this;
    withItems(items: Gs2Account.TakeOverTypeModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeTakeOverTypeModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
