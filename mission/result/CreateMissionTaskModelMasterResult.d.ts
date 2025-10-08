import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class CreateMissionTaskModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.MissionTaskModelMaster | null;
    setItem(item: Gs2Mission.MissionTaskModelMaster | null): this;
    withItem(item: Gs2Mission.MissionTaskModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateMissionTaskModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
