import React, { useEffect } from 'react';

const COMMENTS_ID = 'graphcomment';

const Comments = () => {
    useEffect(() => {
        window.gc_params = {
            graphcomment_id: 'BlogWebSite',
            fixed_header_height: 0,
          };

        const script = document.createElement('script');
        script.src = 'https://graphcomment.com/js/integration.js?' + Date.now();
        script.async = true;

        const comments = document.getElementById(COMMENTS_ID);
        if (comments) comments.appendChild(script);

        return () => {
            const comments = document.getElementById(COMMENTS_ID);
            if (comments) comments.innerHTML = '';
        };
    }, []);

    return <div id={COMMENTS_ID} />
};

export default Comments;