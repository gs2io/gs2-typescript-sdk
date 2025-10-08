import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetMissionTaskModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.MissionTaskModelMaster | null;
    setItem(item: Gs2Mission.MissionTaskModelMaster | null): this;
    withItem(item: Gs2Mission.MissionTaskModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionTaskModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
