import IResult from '../../core/interface/IResult';
import * as Gs2Ranking2 from '../model';
export default class AddSubscribeResult implements IResult {
    private item;
    getItem(): Gs2Ranking2.SubscribeUser | null;
    setItem(item: Gs2Ranking2.SubscribeUser | null): this;
    withItem(item: Gs2Ranking2.SubscribeUser | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddSubscribeResult;
    toDict(): {
        [key: string]: any;
    };
}
