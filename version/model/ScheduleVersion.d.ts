import IModel from '../../core/interface/IModel';
import * as Gs2Version from '../../version/model';
export default class ScheduleVersion implements IModel {
    private currentVersion;
    private warningVersion;
    private errorVersion;
    private scheduleEventId;
    getCurrentVersion(): Gs2Version.Version | null;
    setCurrentVersion(currentVersion: Gs2Version.Version | null): this;
    withCurrentVersion(currentVersion: Gs2Version.Version | null): this;
    getWarningVersion(): Gs2Version.Version | null;
    setWarningVersion(warningVersion: Gs2Version.Version | null): this;
    withWarningVersion(warningVersion: Gs2Version.Version | null): this;
    getErrorVersion(): Gs2Version.Version | null;
    setErrorVersion(errorVersion: Gs2Version.Version | null): this;
    withErrorVersion(errorVersion: Gs2Version.Version | null): this;
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
