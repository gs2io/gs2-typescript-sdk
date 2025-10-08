import IResult from '../../core/interface/IResult';
import * as Gs2Matchmaking from '../model';
export default class PutResultResult implements IResult {
    private items;
    getItems(): Gs2Matchmaking.Rating[] | null;
    setItems(items: Gs2Matchmaking.Rating[] | null): this;
    withItems(items: Gs2Matchmaking.Rating[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutResultResult;
    toDict(): {
        [key: string]: any;
    };
}
