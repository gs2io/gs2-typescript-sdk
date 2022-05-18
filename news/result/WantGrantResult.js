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
var tslib_1 = require("tslib");
var Gs2News = tslib_1.__importStar(require("../model"));
var WantGrantResult = /** @class */ (function () {
    function WantGrantResult() {
        this.items = null;
        this.browserUrl = null;
        this.zipUrl = null;
    }
    WantGrantResult.prototype.getItems = function () {
        return this.items;
    };
    WantGrantResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    WantGrantResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    WantGrantResult.prototype.getBrowserUrl = function () {
        return this.browserUrl;
    };
    WantGrantResult.prototype.setBrowserUrl = function (browserUrl) {
        this.browserUrl = browserUrl;
        return this;
    };
    WantGrantResult.prototype.withBrowserUrl = function (browserUrl) {
        this.browserUrl = browserUrl;
        return this;
    };
    WantGrantResult.prototype.getZipUrl = function () {
        return this.zipUrl;
    };
    WantGrantResult.prototype.setZipUrl = function (zipUrl) {
        this.zipUrl = zipUrl;
        return this;
    };
    WantGrantResult.prototype.withZipUrl = function (zipUrl) {
        this.zipUrl = zipUrl;
        return this;
    };
    WantGrantResult.fromDict = function (data) {
        return new WantGrantResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2News.SetCookieRequestEntry.fromDict(item);
            }) : [])
            .withBrowserUrl(data["browserUrl"])
            .withZipUrl(data["zipUrl"]);
    };
    WantGrantResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "browserUrl": this.getBrowserUrl(),
            "zipUrl": this.getZipUrl(),
        };
    };
    return WantGrantResult;
}());
exports.default = WantGrantResult;
//# sourceMappingURL=WantGrantResult.js.map