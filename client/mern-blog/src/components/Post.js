import React from 'react';

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-1209495734.jpg?w=430&h=230&crop=1" alt="ai" />
        </div>
        <div className="texts">
          <h2>Giga ML wants to help companies deploy LLMs offline!</h2>
          <p className="info">
            <a className="author">Maryam Navaei</a>
            <time>2024-12-31 11:45</time>
          </p>
          <p className="summary">AI is all the rage — particularly text-generating AI, also known as large language models (think models along the lines of ChatGPT). In one recent survey of ~1,000 enterprise organizations, 67.2% say that they see adopting large language models (LLMs) as a top priority by early 2024.</p>
        </div>
      </div>
  )
}
export default Post;