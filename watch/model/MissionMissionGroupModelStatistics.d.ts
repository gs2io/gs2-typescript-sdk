import IModel from '../../core/interface/IModel';
export default class MissionMissionGroupModelStatistics implements IModel {
    private receive;
    getReceive(): number | null;
    setReceive(receive: number | null): this;
    withReceive(receive: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModelStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
