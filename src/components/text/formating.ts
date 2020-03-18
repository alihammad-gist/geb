import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(AdvancedFormat) // use plugin


export function formateDate(graphqlDate: string): string {
    const d = dayjs(graphqlDate);

    return d.format("MMM Do, YYYY")
}