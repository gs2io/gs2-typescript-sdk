import IModel from '../../core/interface/IModel';
import Version from './Version';
export default class ScheduleVersion implements IModel {
    private currentVersion;
    private warningVersion;
    private errorVersion;
    private scheduleEventId;
    getCurrentVersion(): Version | null;
    setCurrentVersion(currentVersion: Version | null): this;
    withCurrentVersion(currentVersion: Version | null): this;
    getWarningVersion(): Version | null;
    setWarningVersion(warningVersion: Version | null): this;
    withWarningVersion(warningVersion: Version | null): this;
    getErrorVersion(): Version | null;
    setErrorVersion(errorVersion: Version | null): this;
    withErrorVersion(errorVersion: Version | null): this;
    getScheduleEventId(): string | null;
    setScheduleEventId(scheduleEventId: string | null): this;
    withScheduleEventId(scheduleEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ScheduleVersion | null;
    toDict(): {
        [key: string]: any;
    };
}
