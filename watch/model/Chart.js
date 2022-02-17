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
exports.Chart = void 0;
var Chart = /** @class */ (function () {
    function Chart() {
        this.chartId = null;
        this.embedId = null;
        this.html = null;
    }
    Chart.prototype.getChartId = function () {
        return this.chartId;
    };
    Chart.prototype.setChartId = function (chartId) {
        this.chartId = chartId;
        return this;
    };
    Chart.prototype.withChartId = function (chartId) {
        this.chartId = chartId;
        return this;
    };
    Chart.prototype.getEmbedId = function () {
        return this.embedId;
    };
    Chart.prototype.setEmbedId = function (embedId) {
        this.embedId = embedId;
        return this;
    };
    Chart.prototype.withEmbedId = function (embedId) {
        this.embedId = embedId;
        return this;
    };
    Chart.prototype.getHtml = function () {
        return this.html;
    };
    Chart.prototype.setHtml = function (html) {
        this.html = html;
        return this;
    };
    Chart.prototype.withHtml = function (html) {
        this.html = html;
        return this;
    };
    Chart.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Chart()
            .withChartId(data["chartId"])
            .withEmbedId(data["embedId"])
            .withHtml(data["html"]);
    };
    Chart.prototype.toDict = function () {
        return {
            "chartId": this.getChartId(),
            "embedId": this.getEmbedId(),
            "html": this.getHtml(),
        };
    };
    return Chart;
}());
exports.Chart = Chart;
//# sourceMappingURL=Chart.js.map