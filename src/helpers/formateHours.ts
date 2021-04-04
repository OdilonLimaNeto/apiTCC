import { Timestamp } from 'typeorm';
import { format } from 'date-fns';

function formatarHora(timestamp: Timestamp) {
    const formattedDate = format(
        timestamp, 
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'"
      );

      return formattedDate;
};


export default formatarHora;