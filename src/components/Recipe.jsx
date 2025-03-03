import React from 'react'
import ReactMarkdown from 'react-markdown'

function Recipe({recipe}) {
  return (
    // <section>
    //     <ReactMarkdown>
    //         {recipe}
    //     </ReactMarkdown>
    // </section>
    <section className="text-[#475467] leading-7 text-[1.125rem] font-normal mx-auto max-w-[90%] lg:max-w-[75%] text-justify mb-25 mt-10">
  <ReactMarkdown
    components={{
      ul: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
      li: ({ children }) => <li className="mb-2">{children}</li>,
    }}
  >
    {recipe}
  </ReactMarkdown>
</section>


  )
}

export default Recipe