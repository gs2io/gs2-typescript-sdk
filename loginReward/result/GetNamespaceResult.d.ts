import IResult from '../../core/interface/IResult';
import * as Gs2LoginReward from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2LoginReward.Namespace | null;
    setItem(item: Gs2LoginReward.Namespace | null): this;
    withItem(item: Gs2LoginReward.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
