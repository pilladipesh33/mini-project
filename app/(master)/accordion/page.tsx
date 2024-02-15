'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import './style.scss';
import { accordionData } from '@/app/(master)/accordion/data';
import { useState } from 'react';

type AccordionComponentProps = {
  title: string;
  content: string;
  key: string;
  index?: number | null;
};

const AccordionPage = () => {
  return (
    <div>
      <h1 className='title'>Accordion</h1>
      <div className='container'>
        <h1 className='sub-text'>Multi-Tab Accordion</h1>
        {accordionData.map((item) => (
          <MultiAccordionComponent
            title={item.title}
            key={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionPage;

function MultiAccordionComponent({
  title,
  content,
  key,
}: AccordionComponentProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='box' key={key}>
      <div className='box-container' onClick={() => setIsActive(!isActive)}>
        <h1>{title}</h1>
        {isActive == true ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isActive && <p className='content'>{content}</p>}
    </div>
  );
}
