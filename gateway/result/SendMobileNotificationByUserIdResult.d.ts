import IResult from '../../core/interface/IResult';
export default class SendMobileNotificationByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): SendMobileNotificationByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
