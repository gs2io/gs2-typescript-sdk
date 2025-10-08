import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class SubscribeResult implements IResult {
    private item;
    getItem(): Gs2Ranking.SubscribeUser | null;
    setItem(item: Gs2Ranking.SubscribeUser | null): this;
    withItem(item: Gs2Ranking.SubscribeUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubscribeResult;
    toDict(): {
        [key: string]: any;
    };
}
