import React from "react"

interface FAQ {
  question: string;
  answer: string;
}

function FAQ(): JSX.Element {
  const faqs: FAQ[] = [
    {
      question: "What services does Vertical Labs offer?",
      answer:
        "Vertical Labs specializes in cutting-edge AI solutions, including machine learning, natural language processing, computer vision, and custom AI development tailored to your specific needs. We also offer AI consulting to help you leverage the power of artificial intelligence.",
    },
    {
      question: "How can AI benefit my business?",
      answer:
        "AI can help your business by automating repetitive tasks, providing insights through data analysis, improving customer service with chatbots, and enhancing decision-making processes. Our AI solutions are designed to address your specific challenges and drive growth.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries, including healthcare, finance, retail, manufacturing, and education. Our expertise in AI allows us to develop solutions that are tailored to the unique needs of each industry.",
    },
    {
      question: "How do you ensure the ethical use of AI?",
      answer:
        "At Vertical Labs, we are committed to ethical AI practices and responsible innovation. We adhere to industry standards and guidelines to ensure that our AI solutions are transparent, fair, and respect user privacy.",
    },
    {
      question:
        "What is the process for starting a project with Vertical Labs?",
      answer:
        "To start a project with us, you can contact us through our website or email. We will schedule an initial consultation to understand your needs and challenges. From there, we will develop a customized AI solution and provide a detailed project plan.",
    },
    {
      question: "Do you offer support and maintenance for your AI solutions?",
      answer:
        "Yes, we offer ongoing support and maintenance for all our AI solutions. Our team is available to assist with any issues, updates, or enhancements to ensure that your AI system continues to perform optimally.",
    },
    {
      question: "Can you integrate AI with our existing systems?",
      answer:
        "Absolutely. Our team has extensive experience in integrating AI solutions with existing systems, including CRM, ERP, and other enterprise software. We ensure seamless integration to maximize the benefits of AI for your business.",
    },
    {
      question: "What makes Vertical Labs different from other AI agencies?",
      answer:
        "Vertical Labs stands out due to our commitment to excellence, ethical AI practices, and personalized approach. We work closely with our clients to understand their unique needs and deliver AI solutions that drive real results. Our team of experts stays at the forefront of AI advancements to provide cutting-edge solutions.",
    },
  ]

  return (
    <div className="faq-container">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item mb-4">
          <h2 className="text-xl font-semibold">{faq.question}</h2>
          <p className="text-base">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default FAQ