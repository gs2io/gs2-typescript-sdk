import IResult from '../../core/interface/IResult';
import * as Gs2AdReward from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2AdReward.Namespace | null;
    setItem(item: Gs2AdReward.Namespace | null): this;
    withItem(item: Gs2AdReward.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
