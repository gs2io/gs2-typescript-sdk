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

import {
  Chart,
  Cumulative,
  BillingActivity,
} from './model';
import {
  GetChartRequest,
  GetCumulativeRequest,
  DescribeBillingActivitiesRequest,
  GetBillingActivityRequest,
} from './request';
import {
  GetChartResult,
  GetCumulativeResult,
  DescribeBillingActivitiesResult,
  GetBillingActivityResult,
} from './result';
import { Gs2WatchRestClient } from './rest';

export default {
  Chart,
  Cumulative,
  BillingActivity,
  GetChartRequest,
  GetChartResult,
  GetCumulativeRequest,
  GetCumulativeResult,
  DescribeBillingActivitiesRequest,
  DescribeBillingActivitiesResult,
  GetBillingActivityRequest,
  GetBillingActivityResult,
  Gs2WatchRestClient,
};
