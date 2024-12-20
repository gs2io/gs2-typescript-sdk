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

import * as Gs2Watch from '../../watch/model'

export default class StatsEvent implements IModel {
    private grn: string|null = null;
    private service: string|null = null;
    private method: string|null = null;
    private metric: string|null = null;
    private cumulative: boolean|null = null;
    private value: number|null = null;
    private tags: string[]|null = null;
    private callAt: number|null = null;
    public getGrn(): string|null {
        return this.grn;
    }
    public setGrn(grn: string|null) {
        this.grn = grn;
        return this;
    }
    public withGrn(grn: string|null): this {
        this.grn = grn;
        return this;
    }
    public getService(): string|null {
        return this.service;
    }
    public setService(service: string|null) {
        this.service = service;
        return this;
    }
    public withService(service: string|null): this {
        this.service = service;
        return this;
    }
    public getMethod(): string|null {
        return this.method;
    }
    public setMethod(method: string|null) {
        this.method = method;
        return this;
    }
    public withMethod(method: string|null): this {
        this.method = method;
        return this;
    }
    public getMetric(): string|null {
        return this.metric;
    }
    public setMetric(metric: string|null) {
        this.metric = metric;
        return this;
    }
    public withMetric(metric: string|null): this {
        this.metric = metric;
        return this;
    }
    public getCumulative(): boolean|null {
        return this.cumulative;
    }
    public setCumulative(cumulative: boolean|null) {
        this.cumulative = cumulative;
        return this;
    }
    public withCumulative(cumulative: boolean|null): this {
        this.cumulative = cumulative;
        return this;
    }
    public getValue(): number|null {
        return this.value;
    }
    public setValue(value: number|null) {
        this.value = value;
        return this;
    }
    public withValue(value: number|null): this {
        this.value = value;
        return this;
    }
    public getTags(): string[]|null {
        return this.tags;
    }
    public setTags(tags: string[]|null) {
        this.tags = tags;
        return this;
    }
    public withTags(tags: string[]|null): this {
        this.tags = tags;
        return this;
    }
    public getCallAt(): number|null {
        return this.callAt;
    }
    public setCallAt(callAt: number|null) {
        this.callAt = callAt;
        return this;
    }
    public withCallAt(callAt: number|null): this {
        this.callAt = callAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): StatsEvent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StatsEvent()
            .withGrn(data["grn"])
            .withService(data["service"])
            .withMethod(data["method"])
            .withMetric(data["metric"])
            .withCumulative(data["cumulative"])
            .withValue(data["value"])
            .withTags(data.tags ?
                data.tags.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withCallAt(data["callAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "grn": this.getGrn(),
            "service": this.getService(),
            "method": this.getMethod(),
            "metric": this.getMetric(),
            "cumulative": this.getCumulative(),
            "value": this.getValue(),
            "tags": this.getTags() ?
                this.getTags()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "callAt": this.getCallAt(),
        };
    }
}
