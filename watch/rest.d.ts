import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export declare class Gs2WatchRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    getChart(request: Request.GetChartRequest): Promise<Result.GetChartResult>;
    getCumulative(request: Request.GetCumulativeRequest): Promise<Result.GetCumulativeResult>;
    describeBillingActivities(request: Request.DescribeBillingActivitiesRequest): Promise<Result.DescribeBillingActivitiesResult>;
    getBillingActivity(request: Request.GetBillingActivityRequest): Promise<Result.GetBillingActivityResult>;
}
