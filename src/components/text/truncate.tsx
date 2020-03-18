import React, { useState } from 'react';

type Props = {
    max: number
    text: string
    expandable: boolean
} & React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
    const { max, text, expandable, ...rest } = props;
    const [isExpanded, expand] = useState(false);

    const exceeds = lengthChecker(max);

    return (

        <p {...rest}>
            {exceeds(text) ?
                <>
                    <span>{
                        isExpanded ?
                            text :
                            text.slice(0, max) + '...'
                    }</span>
                    <br />
                    {expandable ?
                        <a href='#' onClick={(e) => {
                            e.preventDefault();
                            expand(!isExpanded)
                        }}>
                            {isExpanded ? 'Read less' : 'Read more'}
                        </a>
                        : null}
                </>
                : text}
        </p>
    );
}

const lengthChecker =
    (max: number) => (text: string) => text.length > max 