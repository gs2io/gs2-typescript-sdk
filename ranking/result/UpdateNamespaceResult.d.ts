import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Ranking.Namespace | null;
    setItem(item: Gs2Ranking.Namespace | null): this;
    withItem(item: Gs2Ranking.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
