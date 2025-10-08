import IResult from '../../core/interface/IResult';
import * as Gs2StateMachine from '../model';
export default class DescribeStateMachineMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2StateMachine.StateMachineMaster[] | null;
    setItems(items: Gs2StateMachine.StateMachineMaster[] | null): this;
    withItems(items: Gs2StateMachine.StateMachineMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStateMachineMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
