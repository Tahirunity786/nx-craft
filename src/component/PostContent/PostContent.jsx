'use client';

import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

const PostContent = ({ content, wordLimit }) => {
  /**
   * Extract and truncate the first <p> tag content from HTML.
   * @param {string} htmlContent - The raw HTML content.
   * @param {number} limit - Number of words to truncate or 'full' to show all.
   * @returns {string} - Truncated content within the first <p> tag.
   */
  const processContent = (htmlContent, limit) => {
    if (limit === 'full' || !htmlContent) {
      return htmlContent; // Return full content if no limit is specified
    }

    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(htmlContent, 'text/html');
    const firstPTag = parsedDoc.querySelector('p'); // Select the first <p> tag

    if (!firstPTag) return ''; // If no <p> tag is found, return an empty string

    let words = firstPTag.textContent.trim().split(/\s+/);

    if (words.length > limit) {
      words = words.slice(0, limit).join(' ') + '...';
    } else {
      words = words.join(' ');
    }

    // Return sanitized content with truncated text inside <p>
    return `<p>${DOMPurify.sanitize(words)}</p>`;
  };

  const processedContent = processContent(content, wordLimit);

  return (
    <div
      className="post-content "
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};

PostContent.propTypes = {
  content: PropTypes.string.isRequired, // The raw HTML content
  wordLimit: PropTypes.oneOfType([
    PropTypes.string, // 'full'
    PropTypes.number, // Specific word limit
  ]),
};

PostContent.defaultProps = {
  wordLimit: 'full', // Default to showing full content
};

export default PostContent;
