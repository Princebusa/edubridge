import React from "react";
import "./home.css"
import Transfer from "../assets/transfer.jpg"
import Review from "../assets/review.jpg"
import Approval from "../assets/approval.jpg"
import Enrollment from "../assets/enrollment.jpg"
import Apply from "../assets/apply.jpg"
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";


    const faqs = [
        { 
            question: "What is EduBridge?", 
            answer: "YEduBridge is an online platform that helps students transfer from one college to another under the Commissionerate of Technical Education (CTE). It simplifies the application process, document submission, and approval tracking for college transfers." 
        },
        { 
            question: "How does EduBridge help students?", 
            answer: "EduBridge allows students to : Apply for a college transfer online.Check the eligibility criteria for transfers.Submit necessary documents digitally.Track their application status in real time.Get notifications about approvals or rejections" 
        },
        { 
            question: "Is EduBridge free to use?", 
            answer: "Yes, EduBridge is a free platform for students. However, some colleges may have their own administrative fees for processing transfer requests." 
        }    
      ];

const Home = () => {
      const [activeIndex, setActiveIndex] = useState(null);

      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return (
        <>
            <div className="hero">
                <div className="flex-column align-items-center">
                    <h2 className="tag-line">We Build Bridge To The College You Want.</h2>
                    <p className="subline fs-6 text-center">Don't let transfer challenges hold you back; we streamline your journey, simplifying your path to your desired institution, and your future success.</p>
                    <div className="cta justify-content-center d-flex">
                        <a className="bg-white btn login me-2" href="#">Read More</a>
                        <a className="btn signup" href="#">Apply Now</a>
                    </div>
                </div>
            </div>

            <section className="how">
                <div className="inner">
                    <div className="tit-ce">
                    <h2 className="text-center fw-bolder fs-3 pb-1 m-0">How it's Works</h2>
                    <svg className="pb-1" width="233" height="23" viewBox="0 0 103 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 2.92938C4.43173 2.89766 7.84967 2.78582 11.2704 2.67438C19.0926 2.41957 26.9154 2.19363 34.7458 1.98342C52.1201 1.51698 69.4683 0.875522 86.9029 1.021C91.8995 1.0627 97.0037 1.2316 101.82 1.81479C102.307 1.87381 101.675 1.93067 101.473 1.9464C95.6987 2.39669 89.7262 2.5702 83.8972 2.86358C74.6344 3.32978 65.3709 3.79198 56.1018 4.23728C48.0314 4.62499 39.8619 4.909 31.8725 5.52873C28.8226 5.7653 25.5793 6.04524 22.7432 6.58162C21.5045 6.8159 22.5121 6.80534 23.3953 6.80783C32.4601 6.83342 41.3262 6.43207 50.3756 6.91065C55.4893 7.1811 61.7828 7.52532 65.7405 9" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
</svg></div>

                    <div className="stacked-box">
                        <div className="row ">
                            <div className="col-7 d-flex flex-column justify-content-center">
                                <h3 className="staked-title fw-bold">Transfer Request Submission</h3>
                                <ul>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>
Fill The Transfer Application Form</li>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>Select the desired college from the list of available institutes with vacant seats.</li>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>Upload necessary documents (marksheets, NOC from the current college, etc.).</li>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>Submit the application.</li>
                                </ul>
                            </div>
                            <div className="col-5 bg-white d-flex justify-content-center align-items-center rounded-3 stacked-img">
<img src={Transfer} alt="" />
                            </div>
                        </div>
                        <div className="row justify-content-between flex">
                        <div className="stacked-img col-5 bg-white d-flex justify-content-center align-items-center rounded-3">
<img src={Review} alt="" />
</div>
                            <div className="col-6 flex-column d-flex justify-content-center">
                                <h3 className="fs-5 fw-bold">Current Institute Review</h3>
                                <ul>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>
Your current college will review the application.</li>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>If approved, they'll provide you an official No Objection Certificate (NOC).</li>
                                    
                                </ul>
                            </div>
                           
                        </div>
                        <div className="row ">
                            <div className="col-7 d-flex flex-column justify-content-center">
                                <h3 className="fs-5 fw-bold">CTE Final Approval</h3>
                                <ul>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>
The Commissionerate of Technical Education (CTE) verifies all approvals.</li>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>If approved, the Commissionerate will issue transfer orders.</li>
                                   
                                </ul>
                            </div>
                            <div className="col-5 bg-white d-flex justify-content-center align-items-center rounded-3 stacked-img">
                            <img src={Approval} alt="" />
                            </div>
                        </div>
                        <div className="row justify-content-between flex">
                        <div className="stacked-img col-5 bg-white d-flex justify-content-center align-items-center rounded-3">
                        <img src={Enrollment} alt="" />
</div>
                            <div className="col-6 flex-column d-flex justify-content-center">
                                <h3 className="fs-5 fw-bold">Student Enrollment Update & Confirmation</h3>
                                <ul>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>
After the final approval your enrollment record will be updated in the CTE database.</li>
                                    <li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>The new college will provide you an admission letter confirming the transfer.</li>
<li><svg width="18" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="21" height="21" rx="2" fill="#008080"/>
<line x1="3.06066" y1="9.93934" x2="9.06066" y2="15.9393" stroke="white" stroke-width="3"/>
<line x1="6.93934" y1="15.9393" x2="17.9393" y2="4.93934" stroke="white" stroke-width="3"/>
</svg>And at last you have to report to the new college to complete any remaining formalities (ID card, timetable, etc.).</li>
                                    
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>

            <section className="apply">
                <div className="inner bg-white pt-5">
                    <div className="tit-ce">
                    <h2 className="text-center fw-bolder fs-3 pb-1 m-0">Who can apply?</h2>
                    <svg width="233" height="23" viewBox="0 0 103 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 2.92938C4.43173 2.89766 7.84967 2.78582 11.2704 2.67438C19.0926 2.41957 26.9154 2.19363 34.7458 1.98342C52.1201 1.51698 69.4683 0.875522 86.9029 1.021C91.8995 1.0627 97.0037 1.2316 101.82 1.81479C102.307 1.87381 101.675 1.93067 101.473 1.9464C95.6987 2.39669 89.7262 2.5702 83.8972 2.86358C74.6344 3.32978 65.3709 3.79198 56.1018 4.23728C48.0314 4.62499 39.8619 4.909 31.8725 5.52873C28.8226 5.7653 25.5793 6.04524 22.7432 6.58162C21.5045 6.8159 22.5121 6.80534 23.3953 6.80783C32.4601 6.83342 41.3262 6.43207 50.3756 6.91065C55.4893 7.1811 61.7828 7.52532 65.7405 9" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
</svg></div>

<div className="row">
    <div className="col-6">
        <img className="rounded" src={Apply} alt="" />

    </div>
    <div className="col-6 d-flex flex-column justify-content-center">
       <h3>Who can apply?</h3>
        <p>Students pursuing UG and PG degree, seeking college transfers under the Commissionerate of Technical Education (CTE) can apply for transfer through our web portal EduBridge. Eligible applicants include those facing academic, personal, or relocation issues. Designed for transparency and efficiency, EduBridge minimizes disruptions, ensuring seamless academic continuity. By bridging gaps between students and colleges, the platform enhances accessibility, simplifies processes, and fosters a structured, hassle-free transfer experience for both students and colleges.</p>  </div>
</div>

                </div>
            </section>

            <section className="faq py-5 mt-4">
                <div className="inner">
                <div className="tit-ce">
                    <h2 className="text-center fw-bolder fs-3 pb-1 m-0">FAQ</h2>
                    <svg className="mb-5" width="133" height="23" viewBox="0 0 103 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 2.92938C4.43173 2.89766 7.84967 2.78582 11.2704 2.67438C19.0926 2.41957 26.9154 2.19363 34.7458 1.98342C52.1201 1.51698 69.4683 0.875522 86.9029 1.021C91.8995 1.0627 97.0037 1.2316 101.82 1.81479C102.307 1.87381 101.675 1.93067 101.473 1.9464C95.6987 2.39669 89.7262 2.5702 83.8972 2.86358C74.6344 3.32978 65.3709 3.79198 56.1018 4.23728C48.0314 4.62499 39.8619 4.909 31.8725 5.52873C28.8226 5.7653 25.5793 6.04524 22.7432 6.58162C21.5045 6.8159 22.5121 6.80534 23.3953 6.80783C32.4601 6.83342 41.3262 6.43207 50.3756 6.91065C55.4893 7.1811 61.7828 7.52532 65.7405 9" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
</svg></div>
            <div className="max-w-xl mx-auto mt-10 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-2xl overflow-hidden">
          <button
            className="w-full text-left p-4 font-medium"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="p-4 bg-white">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
    </div>
    </section>
        </>
    )
}
export default Home