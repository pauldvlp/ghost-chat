import { useContext, useState } from 'react'
import ChatContext from '../context/contextChat'

const ChatForm = () => {
  const [text, setText] = useState('')
  const { sendMessage } = useContext(ChatContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(text.trim())
    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value.slice(0, 255))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
      setText((prevText) => prevText + '\n')
      return
    }

    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage(text.trim())
      setText('')
    }
  }

  return (
    <section className="[grid-area:form]">
      <form className="flex p-4 gap-4" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <textarea
            autoFocus
            className="resize-none w-full h-24 focus:outline-none focus:ring-4 focus:ring-indigo-300 border-2 rounded-md p-4"
            placeholder="Presiona Intro para enviar, Presiona Mayús + Intro para añadir un salto de línea."
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          {Boolean(text.length) && (
            <span className="p-2  rounded bg-indigo-600 text-white font-semibold text-xs absolute right-[6px] bottom-3 opacity-50">
              {text.length}/255
            </span>
          )}
        </div>
        {text.trim() && (
          <button className="button" type="submit">
            Send
          </button>
        )}
      </form>
    </section>
  )
}

export default ChatForm
