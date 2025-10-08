import IResult from '../../core/interface/IResult';
import * as Gs2Ranking from '../model';
export default class DescribeSubscribesByCategoryNameAndUserIdResult implements IResult {
    private items;
    getItems(): Gs2Ranking.SubscribeUser[] | null;
    setItems(items: Gs2Ranking.SubscribeUser[] | null): this;
    withItems(items: Gs2Ranking.SubscribeUser[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSubscribesByCategoryNameAndUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
