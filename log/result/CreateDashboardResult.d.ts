import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class CreateDashboardResult implements IResult {
    private item;
    getItem(): Gs2Log.Dashboard | null;
    setItem(item: Gs2Log.Dashboard | null): this;
    withItem(item: Gs2Log.Dashboard | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateDashboardResult;
    toDict(): {
        [key: string]: any;
    };
}
