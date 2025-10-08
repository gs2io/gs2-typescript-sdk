import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.Namespace | null;
    setItem(item: Gs2Dictionary.Namespace | null): this;
    withItem(item: Gs2Dictionary.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
