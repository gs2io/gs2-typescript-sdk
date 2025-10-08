import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.Namespace | null;
    setItem(item: Gs2Ranking2.Namespace | null): this;
    withItem(item: Gs2Ranking2.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
