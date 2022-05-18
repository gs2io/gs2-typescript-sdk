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
var DescribeNewsResult = /** @class */ (function () {
    function DescribeNewsResult() {
        this.items = null;
        this.contentHash = null;
        this.templateHash = null;
    }
    DescribeNewsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeNewsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeNewsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeNewsResult.prototype.getContentHash = function () {
        return this.contentHash;
    };
    DescribeNewsResult.prototype.setContentHash = function (contentHash) {
        this.contentHash = contentHash;
        return this;
    };
    DescribeNewsResult.prototype.withContentHash = function (contentHash) {
        this.contentHash = contentHash;
        return this;
    };
    DescribeNewsResult.prototype.getTemplateHash = function () {
        return this.templateHash;
    };
    DescribeNewsResult.prototype.setTemplateHash = function (templateHash) {
        this.templateHash = templateHash;
        return this;
    };
    DescribeNewsResult.prototype.withTemplateHash = function (templateHash) {
        this.templateHash = templateHash;
        return this;
    };
    DescribeNewsResult.fromDict = function (data) {
        return new DescribeNewsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2News.News.fromDict(item);
            }) : [])
            .withContentHash(data["contentHash"])
            .withTemplateHash(data["templateHash"]);
    };
    DescribeNewsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "contentHash": this.getContentHash(),
            "templateHash": this.getTemplateHash(),
        };
    };
    return DescribeNewsResult;
}());
exports.default = DescribeNewsResult;
//# sourceMappingURL=DescribeNewsResult.js.map