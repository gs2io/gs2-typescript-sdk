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

import IModel from '../../core/interface/IModel';

export default class ShowcaseShowcaseBuyDistributionStatistics implements IModel {
    private count: number|null = null;
    private min: number|null = null;
    private max: number|null = null;
    private avg: number|null = null;
    private median: number|null = null;
    private stddev: number|null = null;
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }
    public getMin(): number|null {
        return this.min;
    }
    public setMin(min: number|null) {
        this.min = min;
        return this;
    }
    public withMin(min: number|null): this {
        this.min = min;
        return this;
    }
    public getMax(): number|null {
        return this.max;
    }
    public setMax(max: number|null) {
        this.max = max;
        return this;
    }
    public withMax(max: number|null): this {
        this.max = max;
        return this;
    }
    public getAvg(): number|null {
        return this.avg;
    }
    public setAvg(avg: number|null) {
        this.avg = avg;
        return this;
    }
    public withAvg(avg: number|null): this {
        this.avg = avg;
        return this;
    }
    public getMedian(): number|null {
        return this.median;
    }
    public setMedian(median: number|null) {
        this.median = median;
        return this;
    }
    public withMedian(median: number|null): this {
        this.median = median;
        return this;
    }
    public getStddev(): number|null {
        return this.stddev;
    }
    public setStddev(stddev: number|null) {
        this.stddev = stddev;
        return this;
    }
    public withStddev(stddev: number|null): this {
        this.stddev = stddev;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseShowcaseBuyDistributionStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcaseBuyDistributionStatistics()
            .withCount(data["count"])
            .withMin(data["min"])
            .withMax(data["max"])
            .withAvg(data["avg"])
            .withMedian(data["median"])
            .withStddev(data["stddev"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "count": this.getCount(),
            "min": this.getMin(),
            "max": this.getMax(),
            "avg": this.getAvg(),
            "median": this.getMedian(),
            "stddev": this.getStddev(),
        };
    }
}
