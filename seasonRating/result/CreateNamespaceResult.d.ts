import IResult from '../../core/interface/IResult';
import * as Gs2SeasonRating from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2SeasonRating.Namespace | null;
    setItem(item: Gs2SeasonRating.Namespace | null): this;
    withItem(item: Gs2SeasonRating.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
