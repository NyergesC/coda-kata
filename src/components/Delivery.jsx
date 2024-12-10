import React, { useState } from 'react';
import Elf from './Elf'
import Sleigh from './Sleigh';

const Delivery = () => {
  const [presents, setPresents] = useState([]);
  const [presentId, setPresentId] = useState(1);
/* 
  const handlePack = () => {
    setPresents((prev) => [...prev, `Present #${presentId}`]);
    setPresentId((prev) => prev + 1);
  };
 */
  return (
    <div>
      <h1>Santa's Delivery System</h1>
      <Elf isPacking={isPacking} />
      <Sleigh presents={presents} />
    </div>
  );
};

export default Delivery;