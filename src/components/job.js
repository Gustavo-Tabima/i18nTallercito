import React from "react";
import {FormattedDate} from 'react-intl';
import {FormattedMessage,FormattedNumber,FormattedPlural} from 'react-intl';
const Job = (props) => {
  return (
    <tr>
      
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedNumber value={props.offer.salary } style="currency" currency="USD" />  <FormattedPlural value={props.offer.salary } one="Millón" other="Millones" /></td>
      <td>{props.offer.city}</td>
      <td> <FormattedDate
       value={new Date(props.offer.date)}
       year='numeric'
      month='long'
      day='numeric'
      weekday='long'
  />
   
</td>
<td> <FormattedNumber value={props.offer.visits} style="unit" /> </td>
    </tr>
  );
};

export default Job;
