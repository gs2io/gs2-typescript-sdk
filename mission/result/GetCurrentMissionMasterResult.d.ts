import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetCurrentMissionMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.CurrentMissionMaster | null;
    setItem(item: Gs2Mission.CurrentMissionMaster | null): this;
    withItem(item: Gs2Mission.CurrentMissionMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentMissionMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
