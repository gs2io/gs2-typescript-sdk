import IModel from '../../core/interface/IModel';
import * as Gs2Schedule from '../../schedule/model';
export default class EventMaster implements IModel {
    private eventId;
    private name;
    private description;
    private metadata;
    private scheduleType;
    private absoluteBegin;
    private absoluteEnd;
    private relativeTriggerName;
    private repeatSetting;
    private createdAt;
    private updatedAt;
    private revision;
    private repeatType;
    private repeatBeginDayOfMonth;
    private repeatEndDayOfMonth;
    private repeatBeginDayOfWeek;
    private repeatEndDayOfWeek;
    private repeatBeginHour;
    private repeatEndHour;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getEventName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, eventName: string | null): string | null;
    getEventId(): string | null;
    setEventId(eventId: string | null): this;
    withEventId(eventId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getScheduleType(): string | null;
    setScheduleType(scheduleType: string | null): this;
    withScheduleType(scheduleType: string | null): this;
    getAbsoluteBegin(): number | null;
    setAbsoluteBegin(absoluteBegin: number | null): this;
    withAbsoluteBegin(absoluteBegin: number | null): this;
    getAbsoluteEnd(): number | null;
    setAbsoluteEnd(absoluteEnd: number | null): this;
    withAbsoluteEnd(absoluteEnd: number | null): this;
    getRelativeTriggerName(): string | null;
    setRelativeTriggerName(relativeTriggerName: string | null): this;
    withRelativeTriggerName(relativeTriggerName: string | null): this;
    getRepeatSetting(): Gs2Schedule.RepeatSetting | null;
    setRepeatSetting(repeatSetting: Gs2Schedule.RepeatSetting | null): this;
    withRepeatSetting(repeatSetting: Gs2Schedule.RepeatSetting | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    /** @deprecated */
    getRepeatType(): string | null;
    /** @deprecated */
    setRepeatType(repeatType: string | null): this;
    /** @deprecated */
    withRepeatType(repeatType: string | null): this;
    /** @deprecated */
    getRepeatBeginDayOfMonth(): number | null;
    /** @deprecated */
    setRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number | null): this;
    /** @deprecated */
    withRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number | null): this;
    /** @deprecated */
    getRepeatEndDayOfMonth(): number | null;
    /** @deprecated */
    setRepeatEndDayOfMonth(repeatEndDayOfMonth: number | null): this;
    /** @deprecated */
    withRepeatEndDayOfMonth(repeatEndDayOfMonth: number | null): this;
    /** @deprecated */
    getRepeatBeginDayOfWeek(): string | null;
    /** @deprecated */
    setRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string | null): this;
    /** @deprecated */
    withRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string | null): this;
    /** @deprecated */
    getRepeatEndDayOfWeek(): string | null;
    /** @deprecated */
    setRepeatEndDayOfWeek(repeatEndDayOfWeek: string | null): this;
    /** @deprecated */
    withRepeatEndDayOfWeek(repeatEndDayOfWeek: string | null): this;
    /** @deprecated */
    getRepeatBeginHour(): number | null;
    /** @deprecated */
    setRepeatBeginHour(repeatBeginHour: number | null): this;
    /** @deprecated */
    withRepeatBeginHour(repeatBeginHour: number | null): this;
    /** @deprecated */
    getRepeatEndHour(): number | null;
    /** @deprecated */
    setRepeatEndHour(repeatEndHour: number | null): this;
    /** @deprecated */
    withRepeatEndHour(repeatEndHour: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EventMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
