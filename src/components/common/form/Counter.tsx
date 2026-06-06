'use client';

import { Flex, NumberInput, TextInputProps } from '@mantine/core';
import { Minus, Plus } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

interface ICounterProps extends TextInputProps {
  handleChange?: any;
}

const Counter = (props: ICounterProps) => {
  const [count, setCount] = useState(props.value ? Number(props.value) : 1);

  const handleCountDecrease = () => {
    if (count <= 1 || props.disabled) return;
    props.handleChange && props.handleChange(count - 1);
    setCount((prevCount) => prevCount - 1);
  };

  const handleCountIncrease = () => {
    if (props.disabled) return;
    props.handleChange && props.handleChange(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Flex
      justify={'space-between'}
      align={'center'}
      // gap={12}
      gap={4}
      p={10}
      bg={'neutral.0'}
      bd={'1px solid neutral.4'}
      mah={40}
      className="counter-container"
    >
      <Minus
        size={20}
        color={'#212121'}
        onClick={handleCountDecrease}
        style={{
          cursor: props.disabled ? 'not-allowed' : 'pointer',
        }}
      />
      <NumberInput
        value={Number(props.value)}
        onChange={(data) => {
          setCount(() => Number(data));
          props.handleChange && props.handleChange(data);
        }}
        hideControls
        className="counter-input"
      />
      <Plus
        size={20}
        color={'#212121'}
        onClick={handleCountIncrease}
        style={{
          cursor: props.disabled ? 'not-allowed' : 'pointer',
        }}
      />
    </Flex>
  );
};

export default Counter;
