import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Distributor.Namespace | null;
    setItem(item: Gs2Distributor.Namespace | null): this;
    withItem(item: Gs2Distributor.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
