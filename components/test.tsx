'use client';

import { Button } from './ui/button';

export default function Test() {
  const print = () => {
    console.log('123 on Stateful component');
  };
  return <Button onClick={print} className="">Click me</Button>;
}
