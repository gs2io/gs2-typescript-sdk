import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Account.Namespace | null;
    setItem(item: Gs2Account.Namespace | null): this;
    withItem(item: Gs2Account.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
