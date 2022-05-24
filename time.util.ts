import * as moment from 'moment';
import { MomentInputObject } from 'moment';

export class TimeUtil {

    static getCurrentTimeAsISOString(): string {
        return moment().toISOString();
    }

    static getUTCOffset(): string {
        return moment().format('Z');
    }

    static getTime(timeInput: string | MomentInputObject) {
        return moment(timeInput);
    }

    static orderIsoString(timeString1: string, timeString2: string): number {
        return TimeUtil.getTime(timeString1)
            .isSameOrBefore(TimeUtil.getTime(timeString2))
            ? -1
            : 1;
    }

    static getDayDifferenceFromMidnightToNow(fromDateString: string): number {
        const now = moment();
        const fromMidnightDate = moment(fromDateString).hours(0).minute(0).seconds(0).millisecond(0);

        return now.diff(fromMidnightDate, 'days');
    }

    static getDateInLocal(date: string, locale: string): string {
        const creation = moment(date);
        creation.locale(locale);

        return creation.format('LL');
    }
}
