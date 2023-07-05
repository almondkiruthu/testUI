'use client';

import { Button } from './ui/button';

export default function Test() {
  const print = () => {
    console.log('Hello world');
  };
  return <Button onClick={print} className="">Click me</Button>;
}
