import IModel from '../../core/interface/IModel';
export default class Gs2Region implements IModel {
    private regionName;
    private status;
    getRegionName(): string | null;
    setRegionName(regionName: string | null): this;
    withRegionName(regionName: string | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Gs2Region | null;
    toDict(): {
        [key: string]: any;
    };
}
