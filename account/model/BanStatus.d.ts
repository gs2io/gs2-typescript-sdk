import IModel from '../../core/interface/IModel';
export default class BanStatus implements IModel {
    private name;
    private reason;
    private releaseTimestamp;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getReason(): string | null;
    setReason(reason: string | null): this;
    withReason(reason: string | null): this;
    getReleaseTimestamp(): number | null;
    setReleaseTimestamp(releaseTimestamp: number | null): this;
    withReleaseTimestamp(releaseTimestamp: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BanStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
