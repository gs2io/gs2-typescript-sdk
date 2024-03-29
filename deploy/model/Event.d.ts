import IModel from '../../core/interface/IModel';
export default class Event implements IModel {
    private eventId;
    private name;
    private resourceName;
    private type;
    private message;
    private eventAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getStackName(grn: string): string | null;
    static getEventName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, stackName: string | null, eventName: string | null): string | null;
    getEventId(): string | null;
    setEventId(eventId: string | null): this;
    withEventId(eventId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getResourceName(): string | null;
    setResourceName(resourceName: string | null): this;
    withResourceName(resourceName: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getMessage(): string | null;
    setMessage(message: string | null): this;
    withMessage(message: string | null): this;
    getEventAt(): number | null;
    setEventAt(eventAt: number | null): this;
    withEventAt(eventAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Event | null;
    toDict(): {
        [key: string]: any;
    };
}
