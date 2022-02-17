import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class UpdateCounterModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.CounterModelMaster | null;
    setItem(item: Gs2Mission.CounterModelMaster | null): this;
    withItem(item: Gs2Mission.CounterModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCounterModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
