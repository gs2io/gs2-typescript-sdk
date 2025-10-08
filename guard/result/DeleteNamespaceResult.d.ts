import IResult from '../../core/interface/IResult';
import * as Gs2Guard from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Guard.Namespace | null;
    setItem(item: Gs2Guard.Namespace | null): this;
    withItem(item: Gs2Guard.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
