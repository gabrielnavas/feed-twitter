const useClipboardContents = () => {
  return async () => {
    try {
      const text = await navigator.clipboard.readText();
      if(text.length > 0) {
        return text
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
    return ''
  }
}

export { useClipboardContents }