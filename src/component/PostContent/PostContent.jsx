import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

const PostContent = ({ content, wordLimit = 50 }) => {
  // Sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(content);

  // Extract the first n words while preserving HTML structure
  const extractFirstWords = (htmlContent, limit) => {
    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(htmlContent, 'text/html');

    // Extract text content
    const textContent = parsedDoc.body.textContent || '';

    // Limit to the specified number of words
    const limitedText = textContent.split(/\s+/).slice(0, limit).join(' ');

    return limitedText;
  };

  const limitedContent = extractFirstWords(sanitizedContent, wordLimit);

  // Display sanitized and limited content
  return (
    <div
      className="mb-4 p-2"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitedContent) }}
    />
  );
};

PostContent.propTypes = {
  content: PropTypes.string.isRequired,
  wordLimit: PropTypes.number,
};

export default PostContent;
