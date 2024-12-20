import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DeleteLikesByUserIdResult implements IResult {
    private items;
    getItems(): Gs2Dictionary.Like[] | null;
    setItems(items: Gs2Dictionary.Like[] | null): this;
    withItems(items: Gs2Dictionary.Like[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteLikesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
