import React, { useState } from 'react';

type Props = {
    max: number
    text: string
    expandable: boolean
    tag?: string
} & React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
    const { max, text, expandable, tag = 'p', ...rest } = props;
    const [isExpanded, expand] = useState(false);

    const exceeds = lengthChecker(max);

    return (
        React.createElement(
            tag,
            rest,
            exceeds(text) ?
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
                : text
        )
    );
}

const lengthChecker =
    (max: number) => (text: string) => text.length > max 