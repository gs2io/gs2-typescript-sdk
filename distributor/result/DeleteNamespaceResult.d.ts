import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Distributor.Namespace | null;
    setItem(item: Gs2Distributor.Namespace | null): this;
    withItem(item: Gs2Distributor.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
