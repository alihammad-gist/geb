import React from 'react';
import { Member } from './query';
import { Media } from 'reactstrap';
import { readableLink } from '../text/links';
import { Link } from 'gatsby';

export default ({ author }: { author: Member }) => {
    return (
        <Media>
            <Media left>
                <img
                    src={author.Image.file.publicURL}
                    className="img-fluid rounded-circle img-thumbnail"
                    style={{ maxWidth: '80px' }}
                />
            </Media>
            <Media body className="ml-2">
                <p className="mb-0">By&nbsp;
                <Link
                        to={`/about/${readableLink(author.name)}`} className="h5">
                        {author.name}
                    </Link>
                </p>
                <p>{author.job_title}</p>
            </Media>
        </Media>
    );
}