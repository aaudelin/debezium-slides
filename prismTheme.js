import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark'

export const getLanguage = className => {
    const match = /language-(\w*)/.exec(className || 'language-javascript')
    let lang = 'javascript'
    if (match && match.length > 1) {
      lang = match[1]
    }
    return lang
  }

export const pre = props => props.children

export const code = (opts = {}) => props => {
  const language = getLanguage(props.className)
  return <Prism {...opts} language={language} style={atomDark} {...props} />
}

export default {
  components: {
    pre,
    code,
  },
}