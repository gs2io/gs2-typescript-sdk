import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class UpdateCurrentMissionMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.CurrentMissionMaster | null;
    setItem(item: Gs2Mission.CurrentMissionMaster | null): this;
    withItem(item: Gs2Mission.CurrentMissionMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentMissionMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
