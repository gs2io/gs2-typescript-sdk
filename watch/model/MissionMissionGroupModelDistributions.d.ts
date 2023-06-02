import IModel from '../../core/interface/IModel';
import MissionMissionGroupModelReceiveDistribution from './MissionMissionGroupModelReceiveDistribution';
export default class MissionMissionGroupModelDistributions implements IModel {
    private receive;
    getReceive(): MissionMissionGroupModelReceiveDistribution | null;
    setReceive(receive: MissionMissionGroupModelReceiveDistribution | null): this;
    withReceive(receive: MissionMissionGroupModelReceiveDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
