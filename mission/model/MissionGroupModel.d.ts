import IModel from '../../core/interface/IModel';
import MissionTaskModel from './MissionTaskModel';
export default class MissionGroupModel implements IModel {
    private missionGroupId;
    private name;
    private metadata;
    private tasks;
    private resetType;
    private resetDayOfMonth;
    private resetDayOfWeek;
    private resetHour;
    private completeNotificationNamespaceId;
    getMissionGroupId(): string | null;
    setMissionGroupId(missionGroupId: string | null): this;
    withMissionGroupId(missionGroupId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getTasks(): MissionTaskModel[] | null;
    setTasks(tasks: MissionTaskModel[] | null): this;
    withTasks(tasks: MissionTaskModel[] | null): this;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getResetDayOfMonth(): number | null;
    setResetDayOfMonth(resetDayOfMonth: number | null): this;
    withResetDayOfMonth(resetDayOfMonth: number | null): this;
    getResetDayOfWeek(): string | null;
    setResetDayOfWeek(resetDayOfWeek: string | null): this;
    withResetDayOfWeek(resetDayOfWeek: string | null): this;
    getResetHour(): number | null;
    setResetHour(resetHour: number | null): this;
    withResetHour(resetHour: number | null): this;
    getCompleteNotificationNamespaceId(): string | null;
    setCompleteNotificationNamespaceId(completeNotificationNamespaceId: string | null): this;
    withCompleteNotificationNamespaceId(completeNotificationNamespaceId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionGroupModel | null;
    toDict(): {
        [key: string]: any;
    };
}
