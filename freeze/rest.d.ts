import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2FreezeRestClient extends AbstractGs2RestClient {
    static ENDPOINT_HOST: string | null;
    constructor(session: Gs2RestSession);
    describeStages(request: Request.DescribeStagesRequest): Promise<Result.DescribeStagesResult>;
    getStage(request: Request.GetStageRequest): Promise<Result.GetStageResult>;
    promoteStage(request: Request.PromoteStageRequest): Promise<Result.PromoteStageResult>;
    rollbackStage(request: Request.RollbackStageRequest): Promise<Result.RollbackStageResult>;
    describeOutputs(request: Request.DescribeOutputsRequest): Promise<Result.DescribeOutputsResult>;
    getOutput(request: Request.GetOutputRequest): Promise<Result.GetOutputResult>;
}
