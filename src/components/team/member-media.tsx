import React from 'react';
import { Member } from './query';
import * as styles from './styles.module.scss';
import { Media } from 'reactstrap';


export enum MediaType { Vertical, Horizontal };

type props = {
    member: Member,
    typ: MediaType
}

export default ({ member, typ }: props) => {

    const textual = (centered: boolean) => (
        <>
            <h4 className={`${centered ? "text-center" : ""} mb-0 mt-3`}>
                {member.name}
            </h4>
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
                        style={{ maxWidth: '250px' }}
                        src={member.Image.file.publicURL}
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
                            style={{ maxWidth: '175px', marginRight: '0.5rem' }}
                            src={member.Image.file.publicURL}
                            alt={`Avatar of ${member.name}`}
                        />
                    </Media>

                    <Media body>
                        {textual(false)}
                    </Media>
                </Media>
            );
    }
}
