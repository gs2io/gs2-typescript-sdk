import IResult from '../../core/interface/IResult';
import * as Gs2Freeze from '../model';
export default class GetStageResult implements IResult {
    private item;
    private source;
    private current;
    getItem(): Gs2Freeze.Stage | null;
    setItem(item: Gs2Freeze.Stage | null): this;
    withItem(item: Gs2Freeze.Stage | null): this;
    getSource(): Gs2Freeze.Microservice[] | null;
    setSource(source: Gs2Freeze.Microservice[] | null): this;
    withSource(source: Gs2Freeze.Microservice[] | null): this;
    getCurrent(): Gs2Freeze.Microservice[] | null;
    setCurrent(current: Gs2Freeze.Microservice[] | null): this;
    withCurrent(current: Gs2Freeze.Microservice[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStageResult;
    toDict(): {
        [key: string]: any;
    };
}
