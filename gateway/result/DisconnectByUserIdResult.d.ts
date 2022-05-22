import IResult from '../../core/interface/IResult';
import * as Gs2Gateway from '../model';
export default class DisconnectByUserIdResult implements IResult {
    private items;
    getItems(): Gs2Gateway.WebSocketSession[] | null;
    setItems(items: Gs2Gateway.WebSocketSession[] | null): this;
    withItems(items: Gs2Gateway.WebSocketSession[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DisconnectByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
