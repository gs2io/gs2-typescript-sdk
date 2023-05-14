import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2RestSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2WatchRestClient extends AbstractGs2RestClient {
    constructor(session: Gs2RestSession);
    getChart(request: Request.GetChartRequest): Promise<Result.GetChartResult>;
    getDistribution(request: Request.GetDistributionRequest): Promise<Result.GetDistributionResult>;
    getCumulative(request: Request.GetCumulativeRequest): Promise<Result.GetCumulativeResult>;
    describeBillingActivities(request: Request.DescribeBillingActivitiesRequest): Promise<Result.DescribeBillingActivitiesResult>;
    getBillingActivity(request: Request.GetBillingActivityRequest): Promise<Result.GetBillingActivityResult>;
    getGeneralMetrics(request: Request.GetGeneralMetricsRequest): Promise<Result.GetGeneralMetricsResult>;
    getAccountMetrics(request: Request.GetAccountMetricsRequest): Promise<Result.GetAccountMetricsResult>;
    getExchangeMetrics(request: Request.GetExchangeMetricsRequest): Promise<Result.GetExchangeMetricsResult>;
    getExperienceMetrics(request: Request.GetExperienceMetricsRequest): Promise<Result.GetExperienceMetricsResult>;
    getInboxMetrics(request: Request.GetInboxMetricsRequest): Promise<Result.GetInboxMetricsResult>;
    getInventoryMetrics(request: Request.GetInventoryMetricsRequest): Promise<Result.GetInventoryMetricsResult>;
    getLimitMetrics(request: Request.GetLimitMetricsRequest): Promise<Result.GetLimitMetricsResult>;
    getMatchmakingMetrics(request: Request.GetMatchmakingMetricsRequest): Promise<Result.GetMatchmakingMetricsResult>;
    getMoneyMetrics(request: Request.GetMoneyMetricsRequest): Promise<Result.GetMoneyMetricsResult>;
    getQuestMetrics(request: Request.GetQuestMetricsRequest): Promise<Result.GetQuestMetricsResult>;
    getRankingMetrics(request: Request.GetRankingMetricsRequest): Promise<Result.GetRankingMetricsResult>;
    getShowcaseMetrics(request: Request.GetShowcaseMetricsRequest): Promise<Result.GetShowcaseMetricsResult>;
}
