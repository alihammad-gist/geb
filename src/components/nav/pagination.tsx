import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink, PaginationProps } from 'reactstrap';
import { Link } from 'gatsby';
import { DefaultTooltip } from '../text';

type props = PaginationProps & {
    totalPages: number
    currentPage: number
    linkGenerator: (page: number) => string
}

export default ({
    totalPages,
    currentPage,
    linkGenerator,
    ...rest
}: props) => {

    const [browser, setBrowser] = useState(false);

    useEffect(() => {
        if (!browser) setBrowser(true);
    });


    return (
        <Pagination {...rest}>
            <PaginationItem
                key="first-page"
                disabled={currentPage == 1}
            >
                <PaginationLink
                    first
                    to={linkGenerator(1)}
                    id="first_page"
                    tag={Link}
                />
                <DefaultTooltip target="first_page">
                    First page.
                </DefaultTooltip>
            </PaginationItem>
            <PaginationItem
                key="previous-page"
                disabled={currentPage === 1}
            >
                <PaginationLink
                    previous
                    tag={Link}
                    id="prev_page"
                    to={linkGenerator(currentPage - 1)}
                />
                <DefaultTooltip target="prev_page">
                    Previous page.
                </DefaultTooltip>
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, idx) => {
                const page = idx + 1;

                return (
                    <PaginationItem
                        active={currentPage === page}
                        key={idx}
                    >
                        <PaginationLink
                            to={linkGenerator(page)}
                            tag={Link}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                );
            })}
            <PaginationItem
                key="next-page"
                disabled={currentPage === totalPages}
            >
                <PaginationLink
                    next
                    tag={Link}
                    id="next_page"
                    to={linkGenerator(currentPage + 1)}
                />
                <DefaultTooltip target="next_page">
                    Next page.
                </DefaultTooltip>
            </PaginationItem>
            <PaginationItem
                key="last-page"
                disabled={currentPage === totalPages}
            >
                <PaginationLink
                    last
                    tag={Link}
                    to={linkGenerator(totalPages)}
                    id="last_page"
                />
                {browser &&
                    <DefaultTooltip target="last_page">
                        Last page.
                    </DefaultTooltip>
                }
            </PaginationItem>
        </Pagination>
    );
}