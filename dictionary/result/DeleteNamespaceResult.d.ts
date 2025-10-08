import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Dictionary.Namespace | null;
    setItem(item: Gs2Dictionary.Namespace | null): this;
    withItem(item: Gs2Dictionary.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
