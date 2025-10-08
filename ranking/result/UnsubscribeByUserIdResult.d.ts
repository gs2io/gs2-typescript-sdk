import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class UnsubscribeByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Ranking.SubscribeUser | null;
    setItem(item: Gs2Ranking.SubscribeUser | null): this;
    withItem(item: Gs2Ranking.SubscribeUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnsubscribeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
