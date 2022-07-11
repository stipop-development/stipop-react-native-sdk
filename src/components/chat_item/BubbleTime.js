import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import {Time} from '../../styled/ChatItemStyled';

const BubbleTime = () => {
  const time = moment().format('HH:mm');

  return <Time>{time}</Time>;
};

export default BubbleTime;
