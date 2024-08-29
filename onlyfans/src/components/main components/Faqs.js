import React, { useState } from 'react';
import faqimg from '../../images/faq.png';

const Accordion = ({ children }) => {
   const [expandedItem, setExpandedItem] = useState(null);

   const toggleAccordion = (index) => {
      if (expandedItem === index) {
         setExpandedItem(null);
      } else {
         setExpandedItem(index);
      }
   };

   return (
      <div className="accordion">
         {React.Children.toArray(
            React.Children.map(children, (child, index) =>
               React.cloneElement(child, {
                  expanded: expandedItem === index,
                  toggleAccordion: () => toggleAccordion(index),
               })
            )
         )}
      </div>
   );
};

const AccordionItem = ({ expanded, toggleAccordion, id, title, content }) => {
   return (
      <div className="accordion-item">
         <button
            id={id}
            aria-expanded={expanded ? 'true' : 'false'}
            onClick={toggleAccordion}
         >
            <span className="accordion-title">{title}</span>
            <span className="icon" aria-hidden="true"><svg fill="currentColor" height="8" viewBox="0 0 13 8" width="9" xmlns="http://www.w3.org/2000/svg"><path d="m11.7305.59279c.3626.362629.3885.93447.0777 1.32699l-.0777.08722-4.99999 4.99999c-.36263.36263-.93446.38853-1.32697.0777l-.08725-.0777-4.999959-4.99997c-.3905249-.39052-.3905242-1.023685 0-1.414209.362629-.36263.934469-.388553 1.326989-.077728l.08722.077728 4.29292 4.292139 4.29284-4.29216c.3626-.36263.9345-.388532 1.327-.077707z"></path></svg></span>
         </button>
         {expanded && <div className="accordion-content">{content}</div>}
      </div>
   );
};

const Faqs = () => {
   return (
      <div className="faqs" id='Faqs'>
         <div className="faq_main">
            <img src={faqimg} alt="Faqs img" height={250} />
            <h2>Frequently Asked Questions</h2>
            <Accordion>
               <AccordionItem
                  id="accordion-button-1"
                  title="1. How can Spider OFM Management help me with my OnlyFans account?"
                  content={
                     <p>
                        Spider OFM Management specializes in providing personalized marketing
                        strategies, content creation guidance, and account management services
                        to help you optimize your OnlyFans presence and maximize your earning
                        potential.
                     </p>
                  }
               />
               <AccordionItem
                  id="accordion-button-2"
                  title="2. What sets Spider OFM Management apart from other agencies?"
                  content={
                     <p>
                        Spider OFM Management boasts extensive industry experience, a robust network of female chatters, and a dedication to personalized service. We cater to the unique needs of OnlyFans creators, shaping our strategies to align with your individual goals and aspirations for optimal success.
                     </p>
                  }
               />
               <AccordionItem
                  id="accordion-button-3"
                  title="3. How much does it cost to partner with Spider OFM Management?"
                  content={
                     <p>
                        Our pricing structure is designed to be flexible and tailored to your
                        individual needs. We offer different packages based on the level of
                        support and services you require. Reach out to us directly, and we'll
                        be happy to provide you with detailed pricing information and discuss
                        the best options for you.

                     </p>
                  }
               />
               <AccordionItem
                  id="accordion-button-4"
                  title="4. Can Spider OFM Management guarantee success on OnlyFans?"
                  content={
                     <p>
                        We are dedicated to helping you achieveour goals. With our expertise
                        and guidance, we'll work closely with you to develop effective
                        strategies, create engaging content, and build a strong connection
                        with your fan base, increasing your chances of success on OnlyFans.
                     </p>
                  }
               />
               <AccordionItem
                  id="accordion-button-5"
                  title="5. How can I get started with Spider OFM Management?"
                  content={
                     <p>
                        Getting started is simple! Just reach out to us through our website or
                        contact our team directly. We'll schedule a consultation to discuss
                        your goals, answer any questions you have, and create a customized
                        plan to help you thrive on OnlyFans.
                     </p>
                  }
               />
            </Accordion>
         </div>
      </div>
   );
};

export default Faqs;
