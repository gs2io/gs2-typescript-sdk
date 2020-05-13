/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant, Gs2RestSession } from '../core/model';
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

import {
  Chart,
  Cumulative,
  BillingActivity,
} from './model';

import axios from 'axios';

export class Gs2WatchRestClient extends AbstractGs2RestClient {

  public static ENDPOINT: string = 'watch';

  constructor(session: Gs2RestSession) {
    super(session);
  }

  /**
   * チャートを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getChart(request: GetChartRequest): Promise<GetChartResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/chart/{metrics}')
      .replace('{service}', 'watch')
      .replace('{region}', this.session.region)
      .replace(
        '{metrics}',
        request.metrics ? String(request.metrics) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.grn !== undefined && request.grn !== '') {
      body['grn'] = request.grn;
    }
    if (request.queries !== undefined) {
      body['queries'] = request.queries;
    }
    if (request.by !== undefined && request.by !== '') {
      body['by'] = request.by;
    }
    if (request.timeframe !== undefined && request.timeframe !== '') {
      body['timeframe'] = request.timeframe;
    }
    if (request.size !== undefined && request.size !== '') {
      body['size'] = request.size;
    }
    if (request.format !== undefined && request.format !== '') {
      body['format'] = request.format;
    }
    if (request.aggregator !== undefined && request.aggregator !== '') {
      body['aggregator'] = request.aggregator;
    }
    if (request.style !== undefined && request.style !== '') {
      body['style'] = request.style;
    }
    if (request.title !== undefined && request.title !== '') {
      body['title'] = request.title;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new GetChartResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 累積値を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getCumulative(request: GetCumulativeRequest): Promise<GetCumulativeResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/cumulative/{name}')
      .replace('{service}', 'watch')
      .replace('{region}', this.session.region)
      .replace(
        '{name}',
        request.name ? String(request.name) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    if (request.resourceGrn !== undefined && request.resourceGrn !== '') {
      body['resourceGrn'] = request.resourceGrn;
    }
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new GetCumulativeResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }

  /**
   * 請求にまつわるアクティビティの一覧を取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public describeBillingActivities(request: DescribeBillingActivitiesRequest): Promise<DescribeBillingActivitiesResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}')
      .replace('{service}', 'watch')
      .replace('{region}', this.session.region)
      .replace(
        '{year}',
        request.year !== undefined ? String(request.year) : 'null',
      )
      .replace(
        '{month}',
        request.month !== undefined ? String(request.month) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const params: {[key: string]: any} = {};
    params['contextStack'] = request.contextStack;
    if (request.service !== undefined ) {
      params['service'] = String(request.service);
    }
    if (request.pageToken !== undefined ) {
      params['pageToken'] = String(request.pageToken);
    }
    if (request.limit !== undefined ) {
      params['limit'] = Number(request.limit);
    }

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = request.requestId;
    }

    const config = {
      params,
      headers,
    };
    return axios.get(
      url,
      config,
    )
      .then((response: any) => {
        return new DescribeBillingActivitiesResult(response.data);
      }).catch((error: any) => {
        throw JSON.parse(error.response.data.message);
      });
  }

  /**
   * 請求にまつわるアクティビティを取得<br>
   *
   * @param request リクエストパラメータ
   * @return 結果
   */
  public getBillingActivity(request: GetBillingActivityRequest): Promise<GetBillingActivityResult> {
    const url = (Gs2Constant.ENDPOINT_HOST + '/billingActivity/{year}/{month}/{service}/{activityType}')
      .replace('{service}', 'watch')
      .replace('{region}', this.session.region)
      .replace(
        '{year}',
        request.year !== undefined ? String(request.year) : 'null',
      )
      .replace(
        '{month}',
        request.month !== undefined ? String(request.month) : 'null',
      )
      .replace(
        '{service}',
        request.service ? String(request.service) : 'null',
      )
      .replace(
        '{activityType}',
        request.activityType ? String(request.activityType) : 'null',
      );

    const headers = this.createAuthorizedHeaders();
    const body: {[key: string]: any} = {};
    body['contextStack'] = request.contextStack;

    if (request.requestId) {
      headers['X-GS2-REQUEST-ID'] = String(request.requestId);
    }

    const config = {
      headers,
    };
    return axios.post(
      url,
      body,
      config,
    )
      .then((response: any) => {
        return new GetBillingActivityResult(response.data);
      }).catch((error: any) => {
        if (error.response) {
          throw JSON.parse(error.response.data.message);
        } else {
          throw [];
        }
      });
  }
}
