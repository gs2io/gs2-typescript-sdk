import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Lottery.Namespace | null;
    setItem(item: Gs2Lottery.Namespace | null): this;
    withItem(item: Gs2Lottery.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
