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

import IResult from '../core/interface/IResult';

export class GetChartResult implements IResult {
  /** チャート */
  public item?: Chart;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Chart(data.item);
    }
  }

  public withItem(item?: Chart): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class GetCumulativeResult implements IResult {
  /** 累積値 */
  public item?: Cumulative;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new Cumulative(data.item);
    }
  }

  public withItem(item?: Cumulative): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}

export class DescribeBillingActivitiesResult implements IResult {
  /** 請求にまつわるアクティビティのリスト */
  public items?: BillingActivity[];
  /** リストの続きを取得するためのページトークン */
  public nextPageToken?: string;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.items = data.items.map((item: { [key: string]: any }) => {
        return new BillingActivity(item);
      });
      this.nextPageToken = data.nextPageToken;
    }
  }

  public withItems(items?: BillingActivity[]): this {
    this.items = items;
    return this;
  }

  public withNextPageToken(nextPageToken?: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    if (this.items) {
      data.items = this.items.map((item) => item.toDict());
    }
    data.nextPageToken = this.nextPageToken;
    return data;
  }

}

export class GetBillingActivityResult implements IResult {
  /** 請求にまつわるアクティビティ */
  public item?: BillingActivity;

  constructor(
    data?: { [key: string]: any },
  ) {
    if (data) {
      this.item = new BillingActivity(data.item);
    }
  }

  public withItem(item?: BillingActivity): this {
    this.item = item;
    return this;
  }

  public toDict(): {[key: string]: any} {
    const data: {[key: string]: any} = {};
    data.item = this.item;
    return data;
  }

}
