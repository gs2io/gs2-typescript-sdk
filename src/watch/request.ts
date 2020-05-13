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

import { Gs2Request } from '@/gs2/core/model';

export class GetChartRequest extends Gs2Request {
  /** 指標 */
  public metrics?: string;
  /** リソースのGRN */
  public grn?: string;
  /** クエリリスト */
  public queries?: string[];
  /** グルーピング対象 */
  public by?: string;
  /** データの取得期間 */
  public timeframe?: string;
  /** グラフのサイズ */
  public size?: string;
  /** フォーマット */
  public format?: string;
  /** 集計方針 */
  public aggregator?: string;
  /** スタイル */
  public style?: string;
  /** タイトル */
  public title?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.metrics !== undefined) {
      this.metrics = data.metrics as string;
    } else {
      this.metrics = undefined;
    }
    if (data && data.grn !== undefined) {
      this.grn = data.grn as string;
    } else {
      this.grn = undefined;
    }
    if (data && data.queries !== undefined) {
      this.queries = data.queries as string[];
      for (let i = 0; i < data.queries.length; i++) {
        this.queries[i] = data.queries[i] as string;
      }
    } else {
      this.queries = undefined;
    }
    if (data && data.by !== undefined) {
      this.by = data.by as string;
    } else {
      this.by = undefined;
    }
    if (data && data.timeframe !== undefined) {
      this.timeframe = data.timeframe as string;
    } else {
      this.timeframe = undefined;
    }
    if (data && data.size !== undefined) {
      this.size = data.size as string;
    } else {
      this.size = undefined;
    }
    if (data && data.format !== undefined) {
      this.format = data.format as string;
    } else {
      this.format = undefined;
    }
    if (data && data.aggregator !== undefined) {
      this.aggregator = data.aggregator as string;
    } else {
      this.aggregator = undefined;
    }
    if (data && data.style !== undefined) {
      this.style = data.style as string;
    } else {
      this.style = undefined;
    }
    if (data && data.title !== undefined) {
      this.title = data.title as string;
    } else {
      this.title = undefined;
    }
  }

  public withMetrics(metrics?: string): this {
    this.metrics = metrics as string;
    return this;
  }

  public withGrn(grn?: string): this {
    this.grn = grn as string;
    return this;
  }

  public withQueries(queries?: string[]): this {
    this.queries = queries as string[];
    if (queries) {
      for (let i = 0; i < queries!.length; i++) {
        this.queries[i] = queries![i] as string;
      }
    }
    return this;
  }

  public withBy(by?: string): this {
    this.by = by as string;
    return this;
  }

  public withTimeframe(timeframe?: string): this {
    this.timeframe = timeframe as string;
    return this;
  }

  public withSize(size?: string): this {
    this.size = size as string;
    return this;
  }

  public withFormat(format?: string): this {
    this.format = format as string;
    return this;
  }

  public withAggregator(aggregator?: string): this {
    this.aggregator = aggregator as string;
    return this;
  }

  public withStyle(style?: string): this {
    this.style = style as string;
    return this;
  }

  public withTitle(title?: string): this {
    this.title = title as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.metrics = this.metrics;
    data.grn = this.grn;
    data.queries = this.queries;
    data.by = this.by;
    data.timeframe = this.timeframe;
    data.size = this.size;
    data.format = this.format;
    data.aggregator = this.aggregator;
    data.style = this.style;
    data.title = this.title;
    return data;
  }

}

export class GetCumulativeRequest extends Gs2Request {
  /** 名前 */
  public name?: string;
  /** リソースのGRN */
  public resourceGrn?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.name !== undefined) {
      this.name = data.name as string;
    } else {
      this.name = undefined;
    }
    if (data && data.resourceGrn !== undefined) {
      this.resourceGrn = data.resourceGrn as string;
    } else {
      this.resourceGrn = undefined;
    }
  }

  public withName(name?: string): this {
    this.name = name as string;
    return this;
  }

  public withResourceGrn(resourceGrn?: string): this {
    this.resourceGrn = resourceGrn as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.name = this.name;
    data.resourceGrn = this.resourceGrn;
    return data;
  }

}

export class DescribeBillingActivitiesRequest extends Gs2Request {
  /** イベントの発生年 */
  public year?: number;
  /** イベントの発生月 */
  public month?: number;
  /** サービスの種類 */
  public service?: string;
  /** データの取得を開始する位置を指定するトークン */
  public pageToken?: string;
  /** データの取得件数 */
  public limit?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.year !== undefined) {
      this.year = data.year as number;
    } else {
      this.year = undefined;
    }
    if (data && data.month !== undefined) {
      this.month = data.month as number;
    } else {
      this.month = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
    if (data && data.pageToken !== undefined) {
      this.pageToken = data.pageToken as string;
    } else {
      this.pageToken = undefined;
    }
    if (data && data.limit !== undefined) {
      this.limit = data.limit as number;
    } else {
      this.limit = undefined;
    }
  }

  public withYear(year?: number): this {
    this.year = year as number;
    return this;
  }

  public withMonth(month?: number): this {
    this.month = month as number;
    return this;
  }

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public withPageToken(pageToken?: string): this {
    this.pageToken = pageToken as string;
    return this;
  }

  public withLimit(limit?: number): this {
    this.limit = limit as number;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.year = this.year;
    data.month = this.month;
    data.service = this.service;
    data.pageToken = this.pageToken;
    data.limit = this.limit;
    return data;
  }

}

export class GetBillingActivityRequest extends Gs2Request {
  /** イベントの発生年 */
  public year?: number;
  /** イベントの発生月 */
  public month?: number;
  /** サービスの種類 */
  public service?: string;
  /** イベントの種類 */
  public activityType?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    super(data);
    if (data && data.year !== undefined) {
      this.year = data.year as number;
    } else {
      this.year = undefined;
    }
    if (data && data.month !== undefined) {
      this.month = data.month as number;
    } else {
      this.month = undefined;
    }
    if (data && data.service !== undefined) {
      this.service = data.service as string;
    } else {
      this.service = undefined;
    }
    if (data && data.activityType !== undefined) {
      this.activityType = data.activityType as string;
    } else {
      this.activityType = undefined;
    }
  }

  public withYear(year?: number): this {
    this.year = year as number;
    return this;
  }

  public withMonth(month?: number): this {
    this.month = month as number;
    return this;
  }

  public withService(service?: string): this {
    this.service = service as string;
    return this;
  }

  public withActivityType(activityType?: string): this {
    this.activityType = activityType as string;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.year = this.year;
    data.month = this.month;
    data.service = this.service;
    data.activityType = this.activityType;
    return data;
  }

}
