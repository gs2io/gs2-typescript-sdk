import IResult from '../../core/interface/IResult';
import * as Gs2Gateway from '../model';
export default class SetUserIdResult implements IResult {
    private item;
    getItem(): Gs2Gateway.WebSocketSession | null;
    setItem(item: Gs2Gateway.WebSocketSession | null): this;
    withItem(item: Gs2Gateway.WebSocketSession | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
