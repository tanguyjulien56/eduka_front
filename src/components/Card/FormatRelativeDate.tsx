import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

function formatRelativeDate(date: string | number | Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });
}

export default formatRelativeDate;
