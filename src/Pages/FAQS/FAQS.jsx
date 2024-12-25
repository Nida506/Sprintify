import { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'; // Icon for the open state

function Faqs() {
  // Manage the state of all questions, initially all are closed (false)
  const [openQuestions, setOpenQuestions] = useState([false, false, false]);

  // Toggle function for the dropdown
  const toggleAnswer = (index) => {
    setOpenQuestions((prev) => {
      const newOpenQuestions = [...prev];
      newOpenQuestions[index] = !newOpenQuestions[index];
      return newOpenQuestions;
    });
  };

  const faqs = [
    { question: 'What is the main purpose of Sprintify?', answer: 'Sprintify is a project management tool designed to help teams work efficiently...' },
    { question: 'Is Sprintify free to use?', answer: 'Sprintify helps by providing tools for task management, sprint planning, and collaboration...' },
    { question: 'What are key features of Sprintify?', answer: 'Yes, Sprintify is designed to be scalable for teams of all sizes, from small to large.' },
  ];

  return (
    <div className="overflow-hidden pt-[100px] bg-gradient-to-r from-purple via-pink-300 to-blue  min-h-screen p-[20px] flex items-center justify-center gap-[20px] md:gap-[50px] flex-col">
      <h1 className="md:text-4xl text-2xl text-center font-bold font-Roboto" data-aos="zoom-out">FREQUENTLY ASKED QUESTIONS</h1>

      <div className="flex flex-col w-full items-center gap-[20px]">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full max-w-[600px] bg-white rounded-md" data-aos="zoom-in">
            <div
              className="flex items-center justify-between p-[15px] rounded-md cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <p className="flex-1 text-[16px] md:text-[18px] font-semibold font-roboto">{faq.question}</p>
              {openQuestions[index] ? (
                <ArrowDropUpOutlinedIcon /> // Icon for when the answer is open
              ) : (
                <ArrowDropDownOutlinedIcon /> // Icon for when the answer is closed
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openQuestions[index] ? 'max-h-[500px] p-[10px] mt-2' : 'max-h-0'
              } bg-pink-100 rounded-md`}
            >
              {openQuestions[index] && <p className='p-[10px] text-[16px]'>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
