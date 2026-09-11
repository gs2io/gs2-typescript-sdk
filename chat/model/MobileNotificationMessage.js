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
var MobileNotificationMessage = /** @class */ (function () {
    function MobileNotificationMessage() {
        this.locale = null;
        this.title = null;
        this.message = null;
    }
    MobileNotificationMessage.prototype.getLocale = function () {
        return this.locale;
    };
    MobileNotificationMessage.prototype.setLocale = function (locale) {
        this.locale = locale;
        return this;
    };
    MobileNotificationMessage.prototype.withLocale = function (locale) {
        this.locale = locale;
        return this;
    };
    MobileNotificationMessage.prototype.getTitle = function () {
        return this.title;
    };
    MobileNotificationMessage.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    MobileNotificationMessage.prototype.withTitle = function (title) {
        this.title = title;
        return this;
    };
    MobileNotificationMessage.prototype.getMessage = function () {
        return this.message;
    };
    MobileNotificationMessage.prototype.setMessage = function (message) {
        this.message = message;
        return this;
    };
    MobileNotificationMessage.prototype.withMessage = function (message) {
        this.message = message;
        return this;
    };
    MobileNotificationMessage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MobileNotificationMessage()
            .withLocale(data["locale"])
            .withTitle(data["title"])
            .withMessage(data["message"]);
    };
    MobileNotificationMessage.prototype.toDict = function () {
        return {
            "locale": this.getLocale(),
            "title": this.getTitle(),
            "message": this.getMessage(),
        };
    };
    return MobileNotificationMessage;
}());
exports.default = MobileNotificationMessage;
//# sourceMappingURL=MobileNotificationMessage.js.map