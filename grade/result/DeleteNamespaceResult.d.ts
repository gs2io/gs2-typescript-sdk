import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Grade.Namespace | null;
    setItem(item: Gs2Grade.Namespace | null): this;
    withItem(item: Gs2Grade.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
