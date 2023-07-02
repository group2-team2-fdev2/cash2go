export default function ListItem (text ) {
    const truncateText = (text, wordCount) => {
      if (typeof text !== 'string') {
        const textString = JSON.stringify(text);
        const messageString = textString.replace('{"text":"', '');
        // const messageString = String(text);
        console.log(typeof(messageString))
        console.log (typeof(text))
        const words = messageString.split(' ');
        if (words.length > wordCount) {
          return words.slice(0, wordCount).join(' ') + '...';
        }

        return messageString; 
      }
  
    };
  
    return <p>{truncateText(text, 12)}</p>;
  }