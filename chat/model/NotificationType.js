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
var NotificationType = /** @class */ (function () {
    function NotificationType() {
        this.category = null;
        this.enableTransferMobilePushNotification = null;
    }
    NotificationType.prototype.getCategory = function () {
        return this.category;
    };
    NotificationType.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    NotificationType.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    NotificationType.prototype.getEnableTransferMobilePushNotification = function () {
        return this.enableTransferMobilePushNotification;
    };
    NotificationType.prototype.setEnableTransferMobilePushNotification = function (enableTransferMobilePushNotification) {
        this.enableTransferMobilePushNotification = enableTransferMobilePushNotification;
        return this;
    };
    NotificationType.prototype.withEnableTransferMobilePushNotification = function (enableTransferMobilePushNotification) {
        this.enableTransferMobilePushNotification = enableTransferMobilePushNotification;
        return this;
    };
    NotificationType.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new NotificationType()
            .withCategory(data["category"])
            .withEnableTransferMobilePushNotification(data["enableTransferMobilePushNotification"]);
    };
    NotificationType.prototype.toDict = function () {
        return {
            "category": this.getCategory(),
            "enableTransferMobilePushNotification": this.getEnableTransferMobilePushNotification(),
        };
    };
    return NotificationType;
}());
export default NotificationType;
//# sourceMappingURL=NotificationType.js.map