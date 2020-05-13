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

import IModel from '@/gs2/core/interface/IModel';


/**
 * チャート
 *
 * @author Game Server Services, Inc.
 *
 */
export class Chart implements IModel {
  /** Datadog のJSON 形式のグラフ定義 */
  public chartId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** Datadog から払い出された組み込みID */
  public embedId?: string;
  /** Datadog から払い出された組み込み用HTML */
  public html?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.chartId !== undefined) {
      this.chartId = data.chartId;
    } else {
      this.chartId = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.embedId !== undefined) {
      this.embedId = data.embedId;
    } else {
      this.embedId = undefined;
    }
    if (data && data.html !== undefined) {
      this.html = data.html;
    } else {
      this.html = undefined;
    }
  }

  public withChartId(chartId?: string): this {
    this.chartId = chartId;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withEmbedId(embedId?: string): this {
    this.embedId = embedId;
    return this;
  }

  public withHtml(html?: string): this {
    this.html = html;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.chartId = this.chartId;
    data.ownerId = this.ownerId;
    data.embedId = this.embedId;
    data.html = this.html;
    return data;
  }

}


/**
 * 累積値
 *
 * @author Game Server Services, Inc.
 *
 */
export class Cumulative implements IModel {

  public static createGrn(region: string, ownerId: string, name: string, resourceGrn: string): string {
    return 'grn:gs2:{region}:{ownerId}:watch:cumulative:{resourceGrn}:{name}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{name}', name)
      .replace('{resourceGrn}', resourceGrn);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:cumulative:{resourceGrn}:{name}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{name}', '(.*)');
    grnFormat = grnFormat.replace('{resourceGrn}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:cumulative:{resourceGrn}:{name}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{name}', '(.*)');
    grnFormat = grnFormat.replace('{resourceGrn}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getNameFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:cumulative:{resourceGrn}:{name}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{name}', '(.*)');
    grnFormat = grnFormat.replace('{resourceGrn}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getResourceGrnFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:cumulative:{resourceGrn}:{name}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{name}', '(.*)');
    grnFormat = grnFormat.replace('{resourceGrn}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }
  /** 累積値 */
  public cumulativeId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** リソースのGRN */
  public resourceGrn?: string;
  /** 名前 */
  public name?: string;
  /** 累積値 */
  public value?: number;
  /** 最終更新日時 */
  public updatedAt?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.cumulativeId !== undefined) {
      this.cumulativeId = data.cumulativeId;
    } else {
      this.cumulativeId = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.resourceGrn !== undefined) {
      this.resourceGrn = data.resourceGrn;
    } else {
      this.resourceGrn = undefined;
    }
    if (data && data.name !== undefined) {
      this.name = data.name;
    } else {
      this.name = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = 0;
    }
    if (data && data.updatedAt !== undefined) {
      this.updatedAt = data.updatedAt;
    } else {
      this.updatedAt = 0;
    }
  }

  public withCumulativeId(cumulativeId?: string): this {
    this.cumulativeId = cumulativeId;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withResourceGrn(resourceGrn?: string): this {
    this.resourceGrn = resourceGrn;
    return this;
  }

  public withName(name?: string): this {
    this.name = name;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value;
    return this;
  }

  public withUpdatedAt(updatedAt?: number): this {
    this.updatedAt = updatedAt;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.cumulativeId = this.cumulativeId;
    data.ownerId = this.ownerId;
    data.resourceGrn = this.resourceGrn;
    data.name = this.name;
    data.value = this.value;
    data.updatedAt = this.updatedAt;
    return data;
  }

}


/**
 * 請求にまつわるアクティビティ
 *
 * @author Game Server Services, Inc.
 *
 */
export class BillingActivity implements IModel {

  public static createGrn(region: string, ownerId: string, activityType: string, service: string, month: string, year: string): string {
    return 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}'
      .replace('{region}', region)
      .replace('{ownerId}', ownerId)
      .replace('{activityType}', activityType)
      .replace('{service}', service)
      .replace('{month}', month)
      .replace('{year}', year);
  }

  public static getRegionFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{activityType}', '(.*)');
    grnFormat = grnFormat.replace('{service}', '(.*)');
    grnFormat = grnFormat.replace('{month}', '(.*)');
    grnFormat = grnFormat.replace('{year}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[1];
    }
    return undefined;
  }

  public static getOwnerIdFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{activityType}', '(.*)');
    grnFormat = grnFormat.replace('{service}', '(.*)');
    grnFormat = grnFormat.replace('{month}', '(.*)');
    grnFormat = grnFormat.replace('{year}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[2];
    }
    return undefined;
  }

  public static getActivityTypeFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{activityType}', '(.*)');
    grnFormat = grnFormat.replace('{service}', '(.*)');
    grnFormat = grnFormat.replace('{month}', '(.*)');
    grnFormat = grnFormat.replace('{year}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[3];
    }
    return undefined;
  }

  public static getServiceFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{activityType}', '(.*)');
    grnFormat = grnFormat.replace('{service}', '(.*)');
    grnFormat = grnFormat.replace('{month}', '(.*)');
    grnFormat = grnFormat.replace('{year}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[4];
    }
    return undefined;
  }

  public static getMonthFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{activityType}', '(.*)');
    grnFormat = grnFormat.replace('{service}', '(.*)');
    grnFormat = grnFormat.replace('{month}', '(.*)');
    grnFormat = grnFormat.replace('{year}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[5];
    }
    return undefined;
  }

  public static getYearFromGrn(grn: string) {
    let grnFormat = 'grn:gs2:{region}:{ownerId}:watch:billingActivity:{year}:{month}:{service}:{activityType}';
    grnFormat = grnFormat.replace('{region}', '(.*)');
    grnFormat = grnFormat.replace('{ownerId}', '(.*)');
    grnFormat = grnFormat.replace('{activityType}', '(.*)');
    grnFormat = grnFormat.replace('{service}', '(.*)');
    grnFormat = grnFormat.replace('{month}', '(.*)');
    grnFormat = grnFormat.replace('{year}', '(.*)');

    const match = grn.match(grnFormat);
    if (match) {
      return match[6];
    }
    return undefined;
  }
  /** 請求にまつわるアクティビティ */
  public billingActivityId?: string;
  /** オーナーID */
  public ownerId?: string;
  /** イベントの発生年 */
  public year?: number;
  /** イベントの発生月 */
  public month?: number;
  /** サービスの種類 */
  public service?: string;
  /** イベントの種類 */
  public activityType?: string;
  /** イベントの値 */
  public value?: number;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data && data.billingActivityId !== undefined) {
      this.billingActivityId = data.billingActivityId;
    } else {
      this.billingActivityId = undefined;
    }
    if (data && data.ownerId !== undefined) {
      this.ownerId = data.ownerId;
    } else {
      this.ownerId = undefined;
    }
    if (data && data.year !== undefined) {
      this.year = data.year;
    } else {
      this.year = 0;
    }
    if (data && data.month !== undefined) {
      this.month = data.month;
    } else {
      this.month = 0;
    }
    if (data && data.service !== undefined) {
      this.service = data.service;
    } else {
      this.service = undefined;
    }
    if (data && data.activityType !== undefined) {
      this.activityType = data.activityType;
    } else {
      this.activityType = undefined;
    }
    if (data && data.value !== undefined) {
      this.value = data.value;
    } else {
      this.value = 0;
    }
  }

  public withBillingActivityId(billingActivityId?: string): this {
    this.billingActivityId = billingActivityId;
    return this;
  }

  public withOwnerId(ownerId?: string): this {
    this.ownerId = ownerId;
    return this;
  }

  public withYear(year?: number): this {
    this.year = year;
    return this;
  }

  public withMonth(month?: number): this {
    this.month = month;
    return this;
  }

  public withService(service?: string): this {
    this.service = service;
    return this;
  }

  public withActivityType(activityType?: string): this {
    this.activityType = activityType;
    return this;
  }

  public withValue(value?: number): this {
    this.value = value;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.billingActivityId = this.billingActivityId;
    data.ownerId = this.ownerId;
    data.year = this.year;
    data.month = this.month;
    data.service = this.service;
    data.activityType = this.activityType;
    data.value = this.value;
    return data;
  }

}
