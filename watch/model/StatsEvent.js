"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var StatsEvent = /** @class */ (function () {
    function StatsEvent() {
        this.grn = null;
        this.service = null;
        this.method = null;
        this.metric = null;
        this.cumulative = null;
        this.value = null;
        this.tags = null;
        this.callAt = null;
    }
    StatsEvent.prototype.getGrn = function () {
        return this.grn;
    };
    StatsEvent.prototype.setGrn = function (grn) {
        this.grn = grn;
        return this;
    };
    StatsEvent.prototype.withGrn = function (grn) {
        this.grn = grn;
        return this;
    };
    StatsEvent.prototype.getService = function () {
        return this.service;
    };
    StatsEvent.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    StatsEvent.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    StatsEvent.prototype.getMethod = function () {
        return this.method;
    };
    StatsEvent.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    StatsEvent.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    StatsEvent.prototype.getMetric = function () {
        return this.metric;
    };
    StatsEvent.prototype.setMetric = function (metric) {
        this.metric = metric;
        return this;
    };
    StatsEvent.prototype.withMetric = function (metric) {
        this.metric = metric;
        return this;
    };
    StatsEvent.prototype.getCumulative = function () {
        return this.cumulative;
    };
    StatsEvent.prototype.setCumulative = function (cumulative) {
        this.cumulative = cumulative;
        return this;
    };
    StatsEvent.prototype.withCumulative = function (cumulative) {
        this.cumulative = cumulative;
        return this;
    };
    StatsEvent.prototype.getValue = function () {
        return this.value;
    };
    StatsEvent.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    StatsEvent.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    StatsEvent.prototype.getTags = function () {
        return this.tags;
    };
    StatsEvent.prototype.setTags = function (tags) {
        this.tags = tags;
        return this;
    };
    StatsEvent.prototype.withTags = function (tags) {
        this.tags = tags;
        return this;
    };
    StatsEvent.prototype.getCallAt = function () {
        return this.callAt;
    };
    StatsEvent.prototype.setCallAt = function (callAt) {
        this.callAt = callAt;
        return this;
    };
    StatsEvent.prototype.withCallAt = function (callAt) {
        this.callAt = callAt;
        return this;
    };
    StatsEvent.fromDict = function (data) {
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
            data.tags.map(function (item) {
                return item;
            }) : [])
            .withCallAt(data["callAt"]);
    };
    StatsEvent.prototype.toDict = function () {
        return {
            "grn": this.getGrn(),
            "service": this.getService(),
            "method": this.getMethod(),
            "metric": this.getMetric(),
            "cumulative": this.getCumulative(),
            "value": this.getValue(),
            "tags": this.getTags() ?
                this.getTags().map(function (item) {
                    return item;
                }) : [],
            "callAt": this.getCallAt(),
        };
    };
    return StatsEvent;
}());
exports.default = StatsEvent;
//# sourceMappingURL=StatsEvent.js.map