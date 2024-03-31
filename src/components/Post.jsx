import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import formatDate from '../hooks/dateFormat';

const Post = () => {
  const [postContent, setPostContent] = useState('');
  const [frontMatter, setFrontMatter] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/posts/published/${slug}.md`)
      .then(response => response.text())
      .then(text => {
        const splitContent = text.split('---');
        const frontMatterContent = splitContent[1];
        const markdownContent = splitContent[2];

        const frontMatterLines = frontMatterContent.trim().split('\n');
        const frontMatterData = frontMatterLines.reduce((acc, line) => {
          const [key, value] = line.split(':').map(part => part.trim());
          acc[key] = value.replace(/["']/g, '');
          return acc;
        }, {});

        // Configure marked with highlight.js for code syntax highlighting
        marked.setOptions({
          highlight: function(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
          }
        });

        const html = marked.parse(markdownContent);
        const sanitizedHtml = DOMPurify.sanitize(html, {
          ADD_TAGS: ['iframe', 'pre', 'code'],
          ADD_ATTR: ['class'],
        });

        setPostContent(sanitizedHtml);
        setFrontMatter(frontMatterData);
      }).then(() => {
      hljs.highlightAll(); // Manually trigger highlighting after content is loaded
    })
      .catch(err => console.error("Fetch error: ", err));
  }, [slug]);

  return (
    <>
      <article>
        <header className='mb-6'>
          <h1 className="text-4xl italic font-bold">{frontMatter.title}</h1>
          <p className='text-lg italic text-blue-950 opacity-90 mt-2 p-0'>{formatDate(frontMatter.date)}</p>
        </header>
        
        <div className="divide-y xl:divide-y-0 divide-neutral-200 mb-6">
          <div className="prose text-lg text-blue-950 divide-y divide-neutral-200 xl:pb-0 xl:col-span-3 xl:row-span-2" dangerouslySetInnerHTML={{ __html: postContent }} />
        </div>

        <p className='text-2xl'>END</p>
        <p className='mt-6'><Link to='/'>← Return to Homepage</Link></p>
        <p className='mt-4'><Link to='/posts'>Checkout my other writeups →</Link></p>
      </article>
    </>
  );
};

export default Post;
