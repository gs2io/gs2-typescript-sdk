import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Money.Namespace | null;
    setItem(item: Gs2Money.Namespace | null): this;
    withItem(item: Gs2Money.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
