import React, { useEffect } from 'react';
import { Member } from './query';
import * as styles from './styles.module.scss';
import { Media } from 'reactstrap';
import { Link } from 'gatsby';


export enum MediaType { Vertical, Horizontal, HorizontalSmall };

type props = {
    member: Member,
    typ: MediaType
}

export default ({ member, typ }: props) => {

    const textual = (centered: boolean, HeadingTag: string = 'h4') => (
        <>
            {React.createElement(HeadingTag, {
                className: `${centered ? "text-center" : ""} mb-0 mt-3`
            }, <Link to={`/about/${member.fields.slug}`}>{member.name}</Link>
            )}
            <p className={`${centered ? "text-center" : ""} mb-0`}>
                {member.job_title}
            </p>
            <p className={centered ? "text-center" : ""}>
                <small
                    dangerouslySetInnerHTML={{
                        __html: member.job_desc
                    }}
                />
            </p>
        </>
    );

    switch (typ) {
        case MediaType.Vertical:
            return (
                <div className={styles.media}>
                    <img
                        className="rounded-circle img-fluid img-thumbnail"
                        style={{ maxWidth: '175px' }}
                        src={member.Image.file.childImageSharp.fluid.src}
                        alt={member.Image.caption} />
                    {textual(true)}
                </div>
            );
        default:
            return (
                <Media>
                    <Media left>
                        <img
                            className="rounded-circle img-fluid img-thumbnail"
                            style={{
                                maxWidth: (
                                    typ === MediaType.HorizontalSmall ? '80px' : '175px'
                                ),
                                marginRight: '0.5rem'
                            }}
                            src={member.Image.file.childImageSharp.fluid.src}
                            alt={`Avatar of ${member.name}`}
                        />
                    </Media>

                    <Media body>
                        {typ === MediaType.HorizontalSmall ? textual(false, 'h5') : textual(false)}
                    </Media>
                </Media>
            );
    }
}
