/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
import GetChartResult from "./GetChartResult"
import GetDistributionResult from "./GetDistributionResult"
import GetCumulativeResult from "./GetCumulativeResult"
import DescribeBillingActivitiesResult from "./DescribeBillingActivitiesResult"
import GetBillingActivityResult from "./GetBillingActivityResult"
import GetGeneralMetricsResult from "./GetGeneralMetricsResult"
import DescribeAccountNamespaceMetricsResult from "./DescribeAccountNamespaceMetricsResult"
import GetAccountNamespaceMetricsResult from "./GetAccountNamespaceMetricsResult"
import DescribeChatNamespaceMetricsResult from "./DescribeChatNamespaceMetricsResult"
import GetChatNamespaceMetricsResult from "./GetChatNamespaceMetricsResult"
import DescribeDatastoreNamespaceMetricsResult from "./DescribeDatastoreNamespaceMetricsResult"
import GetDatastoreNamespaceMetricsResult from "./GetDatastoreNamespaceMetricsResult"
import DescribeDictionaryNamespaceMetricsResult from "./DescribeDictionaryNamespaceMetricsResult"
import GetDictionaryNamespaceMetricsResult from "./GetDictionaryNamespaceMetricsResult"
import DescribeExchangeRateModelMetricsResult from "./DescribeExchangeRateModelMetricsResult"
import GetExchangeRateModelMetricsResult from "./GetExchangeRateModelMetricsResult"
import DescribeExchangeNamespaceMetricsResult from "./DescribeExchangeNamespaceMetricsResult"
import GetExchangeNamespaceMetricsResult from "./GetExchangeNamespaceMetricsResult"
import DescribeExperienceStatusMetricsResult from "./DescribeExperienceStatusMetricsResult"
import DescribeExperienceExperienceModelMetricsResult from "./DescribeExperienceExperienceModelMetricsResult"
import GetExperienceExperienceModelMetricsResult from "./GetExperienceExperienceModelMetricsResult"
import DescribeExperienceNamespaceMetricsResult from "./DescribeExperienceNamespaceMetricsResult"
import GetExperienceNamespaceMetricsResult from "./GetExperienceNamespaceMetricsResult"
import DescribeFormationFormMetricsResult from "./DescribeFormationFormMetricsResult"
import DescribeFormationMoldMetricsResult from "./DescribeFormationMoldMetricsResult"
import DescribeFormationNamespaceMetricsResult from "./DescribeFormationNamespaceMetricsResult"
import GetFormationNamespaceMetricsResult from "./GetFormationNamespaceMetricsResult"
import DescribeFriendNamespaceMetricsResult from "./DescribeFriendNamespaceMetricsResult"
import GetFriendNamespaceMetricsResult from "./GetFriendNamespaceMetricsResult"
import DescribeInboxNamespaceMetricsResult from "./DescribeInboxNamespaceMetricsResult"
import GetInboxNamespaceMetricsResult from "./GetInboxNamespaceMetricsResult"
import DescribeInventoryItemSetMetricsResult from "./DescribeInventoryItemSetMetricsResult"
import DescribeInventoryInventoryMetricsResult from "./DescribeInventoryInventoryMetricsResult"
import DescribeInventoryNamespaceMetricsResult from "./DescribeInventoryNamespaceMetricsResult"
import GetInventoryNamespaceMetricsResult from "./GetInventoryNamespaceMetricsResult"
import DescribeKeyNamespaceMetricsResult from "./DescribeKeyNamespaceMetricsResult"
import GetKeyNamespaceMetricsResult from "./GetKeyNamespaceMetricsResult"
import DescribeLimitCounterMetricsResult from "./DescribeLimitCounterMetricsResult"
import DescribeLimitLimitModelMetricsResult from "./DescribeLimitLimitModelMetricsResult"
import GetLimitLimitModelMetricsResult from "./GetLimitLimitModelMetricsResult"
import DescribeLimitNamespaceMetricsResult from "./DescribeLimitNamespaceMetricsResult"
import GetLimitNamespaceMetricsResult from "./GetLimitNamespaceMetricsResult"
import DescribeLotteryLotteryMetricsResult from "./DescribeLotteryLotteryMetricsResult"
import GetLotteryLotteryMetricsResult from "./GetLotteryLotteryMetricsResult"
import DescribeLotteryNamespaceMetricsResult from "./DescribeLotteryNamespaceMetricsResult"
import GetLotteryNamespaceMetricsResult from "./GetLotteryNamespaceMetricsResult"
import DescribeMatchmakingNamespaceMetricsResult from "./DescribeMatchmakingNamespaceMetricsResult"
import GetMatchmakingNamespaceMetricsResult from "./GetMatchmakingNamespaceMetricsResult"
import DescribeMissionCounterMetricsResult from "./DescribeMissionCounterMetricsResult"
import DescribeMissionMissionGroupModelMetricsResult from "./DescribeMissionMissionGroupModelMetricsResult"
import GetMissionMissionGroupModelMetricsResult from "./GetMissionMissionGroupModelMetricsResult"
import DescribeMissionNamespaceMetricsResult from "./DescribeMissionNamespaceMetricsResult"
import GetMissionNamespaceMetricsResult from "./GetMissionNamespaceMetricsResult"
import DescribeMoneyWalletMetricsResult from "./DescribeMoneyWalletMetricsResult"
import DescribeMoneyReceiptMetricsResult from "./DescribeMoneyReceiptMetricsResult"
import DescribeMoneyNamespaceMetricsResult from "./DescribeMoneyNamespaceMetricsResult"
import GetMoneyNamespaceMetricsResult from "./GetMoneyNamespaceMetricsResult"
import DescribeQuestQuestModelMetricsResult from "./DescribeQuestQuestModelMetricsResult"
import GetQuestQuestModelMetricsResult from "./GetQuestQuestModelMetricsResult"
import DescribeQuestQuestGroupModelMetricsResult from "./DescribeQuestQuestGroupModelMetricsResult"
import GetQuestQuestGroupModelMetricsResult from "./GetQuestQuestGroupModelMetricsResult"
import DescribeQuestNamespaceMetricsResult from "./DescribeQuestNamespaceMetricsResult"
import GetQuestNamespaceMetricsResult from "./GetQuestNamespaceMetricsResult"
import DescribeRankingCategoryModelMetricsResult from "./DescribeRankingCategoryModelMetricsResult"
import GetRankingCategoryModelMetricsResult from "./GetRankingCategoryModelMetricsResult"
import DescribeRankingNamespaceMetricsResult from "./DescribeRankingNamespaceMetricsResult"
import GetRankingNamespaceMetricsResult from "./GetRankingNamespaceMetricsResult"
import DescribeShowcaseDisplayItemMetricsResult from "./DescribeShowcaseDisplayItemMetricsResult"
import GetShowcaseDisplayItemMetricsResult from "./GetShowcaseDisplayItemMetricsResult"
import DescribeShowcaseShowcaseMetricsResult from "./DescribeShowcaseShowcaseMetricsResult"
import GetShowcaseShowcaseMetricsResult from "./GetShowcaseShowcaseMetricsResult"
import DescribeShowcaseNamespaceMetricsResult from "./DescribeShowcaseNamespaceMetricsResult"
import GetShowcaseNamespaceMetricsResult from "./GetShowcaseNamespaceMetricsResult"
import DescribeStaminaStaminaModelMetricsResult from "./DescribeStaminaStaminaModelMetricsResult"
import GetStaminaStaminaModelMetricsResult from "./GetStaminaStaminaModelMetricsResult"
import DescribeStaminaNamespaceMetricsResult from "./DescribeStaminaNamespaceMetricsResult"
import GetStaminaNamespaceMetricsResult from "./GetStaminaNamespaceMetricsResult"

export {
    GetChartResult,
    GetDistributionResult,
    GetCumulativeResult,
    DescribeBillingActivitiesResult,
    GetBillingActivityResult,
    GetGeneralMetricsResult,
    DescribeAccountNamespaceMetricsResult,
    GetAccountNamespaceMetricsResult,
    DescribeChatNamespaceMetricsResult,
    GetChatNamespaceMetricsResult,
    DescribeDatastoreNamespaceMetricsResult,
    GetDatastoreNamespaceMetricsResult,
    DescribeDictionaryNamespaceMetricsResult,
    GetDictionaryNamespaceMetricsResult,
    DescribeExchangeRateModelMetricsResult,
    GetExchangeRateModelMetricsResult,
    DescribeExchangeNamespaceMetricsResult,
    GetExchangeNamespaceMetricsResult,
    DescribeExperienceStatusMetricsResult,
    DescribeExperienceExperienceModelMetricsResult,
    GetExperienceExperienceModelMetricsResult,
    DescribeExperienceNamespaceMetricsResult,
    GetExperienceNamespaceMetricsResult,
    DescribeFormationFormMetricsResult,
    DescribeFormationMoldMetricsResult,
    DescribeFormationNamespaceMetricsResult,
    GetFormationNamespaceMetricsResult,
    DescribeFriendNamespaceMetricsResult,
    GetFriendNamespaceMetricsResult,
    DescribeInboxNamespaceMetricsResult,
    GetInboxNamespaceMetricsResult,
    DescribeInventoryItemSetMetricsResult,
    DescribeInventoryInventoryMetricsResult,
    DescribeInventoryNamespaceMetricsResult,
    GetInventoryNamespaceMetricsResult,
    DescribeKeyNamespaceMetricsResult,
    GetKeyNamespaceMetricsResult,
    DescribeLimitCounterMetricsResult,
    DescribeLimitLimitModelMetricsResult,
    GetLimitLimitModelMetricsResult,
    DescribeLimitNamespaceMetricsResult,
    GetLimitNamespaceMetricsResult,
    DescribeLotteryLotteryMetricsResult,
    GetLotteryLotteryMetricsResult,
    DescribeLotteryNamespaceMetricsResult,
    GetLotteryNamespaceMetricsResult,
    DescribeMatchmakingNamespaceMetricsResult,
    GetMatchmakingNamespaceMetricsResult,
    DescribeMissionCounterMetricsResult,
    DescribeMissionMissionGroupModelMetricsResult,
    GetMissionMissionGroupModelMetricsResult,
    DescribeMissionNamespaceMetricsResult,
    GetMissionNamespaceMetricsResult,
    DescribeMoneyWalletMetricsResult,
    DescribeMoneyReceiptMetricsResult,
    DescribeMoneyNamespaceMetricsResult,
    GetMoneyNamespaceMetricsResult,
    DescribeQuestQuestModelMetricsResult,
    GetQuestQuestModelMetricsResult,
    DescribeQuestQuestGroupModelMetricsResult,
    GetQuestQuestGroupModelMetricsResult,
    DescribeQuestNamespaceMetricsResult,
    GetQuestNamespaceMetricsResult,
    DescribeRankingCategoryModelMetricsResult,
    GetRankingCategoryModelMetricsResult,
    DescribeRankingNamespaceMetricsResult,
    GetRankingNamespaceMetricsResult,
    DescribeShowcaseDisplayItemMetricsResult,
    GetShowcaseDisplayItemMetricsResult,
    DescribeShowcaseShowcaseMetricsResult,
    GetShowcaseShowcaseMetricsResult,
    DescribeShowcaseNamespaceMetricsResult,
    GetShowcaseNamespaceMetricsResult,
    DescribeStaminaStaminaModelMetricsResult,
    GetStaminaStaminaModelMetricsResult,
    DescribeStaminaNamespaceMetricsResult,
    GetStaminaNamespaceMetricsResult,
};